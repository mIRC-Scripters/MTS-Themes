; ------------
; Global stuff
; ------------

; Paste menu with settings
; This should be easy to modifiy so it suits you best
menu MenuBar {
  -
  Negative Entropy
  . $+ $iif(%ct.timestamp == $true, $style(1), $style(0)) $+ Use timestamp: %ct.timestamp = $ct.switch(%ct.timestamp)
  . $+ $iif(%ct.timestamp == $true, $style(0), $style(2)) $+ Timestamp
  .. $+ $iif(%ct.tsmode == 1, $style(1), $style(0)) $+ [hh $+ $chr(58) $+ mm]: %ct.tsmode = 1
  .. $+ $iif(%ct.tsmode == 2, $style(1), $style(0)) $+ [hh $+ $chr(58) $+ mm $+ $chr(58) $+ ss]: %ct.tsmode = 2
  .-
  . Nick space
  .. $+ $iif(%ct.alignwidth == 230, $style(1), $style(0)) $+ very large: %ct.alignwidth = 230
  .. $+ $iif(%ct.alignwidth == 200, $style(1), $style(0)) $+ large: %ct.alignwidth = 200
  .. $+ $iif(%ct.alignwidth == 170, $style(1), $style(0)) $+ normal: %ct.alignwidth = 170
  .. $+ $iif(%ct.alignwidth == 140, $style(1), $style(0)) $+ small: %ct.alignwidth = 140
  .. $+ $iif(%ct.alignwidth == 110, $style(1), $style(0)) $+ very small: %ct.alignwidth = 110
  ..-
  .. $+ $iif(%ct.alignwidth == 0, $style(1), $style(0)) $+ disabled: %ct.alignwidth = 0
  .-
  .Other
  .. $+ $iif(%ct.separation == $true, $style(1), $style(0)) $+ Text/Event separation: %ct.separation = $ct.switch(%ct.separation)
  .. $+ $iif(%ct.monoevents == $true, $style(1), $style(0)) $+ Monochromatic events: %ct.monoevents = $ct.switch(%ct.monoevents)
  .-
  . $+ $iif($left($active, 1) != @, $style(0), $style(2)) $+ Realign for $window($active).font : $ct.font.set($window($active).font, $window($active).fontsize)
}

; Restore hashes for channel textseparation and fontdata
on 1:start: {
  if ($hget(ct.sep) == $null) {
    hmake ct.sep 10
  }
  $ct.analyzefont(%ct.font, %ct.fontsize)
}

; ----------------------------
; NE Support functions
; Messing here could be bad ;)
; ----------------------------

; Nickname 
alias -l ct.nick {
  var %x = 1
  ; $cnick(nick).color does NOT work with modes - not with prefixed nicks like "@test" or "+test" nor "test"
  ; Need to seach all $cnicks manually. This is not 100% accurate but should do for the average user
  ; $eval is used to handle cnicks like "$me"
  while (%x <= $cnick(0)) {
    if ($cnick(%x) == $1) { break }
    if ($eval($cnick(%x), 2) == $1 ) { break }
    if (($2 isin $cnick(%x).modes) && ($cnick(%x) == $null)) { break }
    if (($2 == $null) && ($cnick(%x) == $null) && $cnick(%x).nomode) { break }
    inc %x
  }
  return  $+ $cnick(%x).color $+ $2 $+ $1 $+ 
}

; Analyzes proportional font and stores chars of ascending pixelwidth in a hash
; this is ugly, but so is mirc-script
alias -l ct.analyzefont {
  ; make sure ct.fnt is empty
  if ($hget(ct.fnt) != $null) {
    hfree ct.fnt
  }
  hmake ct.fnt 10

  ; s is the desired target width, i the charindex that matches this width
  ; fixme: this is ugly
  var %firstfound = $false
  var %s = 3
  var %i = 0
  while (%s < 12) {
    %i = 0
    while (%i <= 255) {
      if (%i = 32) {
        inc %i
        continue
      }
      if ($width($chr(%i), $1, $2, 0, 0) == %s) {
        if (%firstfound == $false) {
          %firstfound = $true
          hadd ct.fnt first s $+ %s
        } 
        ;echo Width %s $+ : chr( $+ %i $+ ) < $+ $chr(%i) $+ >
        hadd ct.fnt s $+ %s %i
        break
      }
      inc %i
    }
    inc %s
  }

  ; optimize: try to use space (chr #32) as basechar if possible
  ; this will only work if all charwidths from (%spcwidth +1) to (2 x %spcwidth -1) are available
  var %optimizable = $true
  var %spcwidth = $width($chr(32), $1, $2, 0, 0)
  %s = $calc(%spcwidth +1)
  while (%s <= $calc( 2 * %spcwidth -1 )) {
    if ($hget(ct.fnt, s $+ %s) == $null) {
      %optimizable = $false
      break
    }
    inc %s
  }
  if (%optimizable) {
    hadd ct.fnt first s $+ %spcwidth
    hadd ct.fnt s $+ %spcwidth 32
  }


}

; Aligned text -- $1: short info $2: text
alias -l ct.align {
  if (%ct.alignwidth > 0) {
    var %gapsize = $calc(%ct.alignwidth - $width($strip($timestamp $+ $1 $+ $2), %ct.font, %ct.fontsize, 0, 0))
    var %basesize = $replace($hget(ct.fnt, first), s, )

    if (%gapsize > %basesize) {    
      var %count = $int($calc(%gapsize / %basesize))
      var %mod = $calc(%gapsize - (%basesize * %count))
      if (%mod > 0) {
        return 00 $+ $chr( $hget(ct.fnt, s $+ $calc(%mod + %basesize)) ) $+ $str($chr($hget(ct.fnt, s $+ %basesize)) $+ $chr(15), $calc(%count -1)) $+  $2
      }
      else {
        return 00 $+ $str($chr($hget(ct.fnt, s $+ %basesize)) $+ $chr(15), %count)) $+  $2
      }
    }
  }
  return 00  $+ $2
}

; refresh timestamp
alias -l ct.timestamp.refresh {
  if (%ct.tsmode == 1) {
    .timestamp -f  $+ %::c1 $+ [ $+ %::c2 $+ HH $+ %::c1 $+ : $+ %::c2 $+ nn $+ %::c1 $+ ]
  }
  else {
    .timestamp -f  $+ %::c1 $+ [ $+ %::c2 $+ HH $+ %::c1 $+ : $+ %::c2 $+ nn $+ %::c1 $+ : $+ %::c2 $+ ss $+ %::c1 $+ ]
  }
}

; strips "t" from the echo options (remove timestamp from %::echo) if set in options
; $1: %::echo-var $2: override system settings ($true/$false=$null)
alias -l ct.striptime {
  if ((%ct.timestamp == $false) || ($2 == $true)) {
    var %i = 1
    var %imax = $calc($numtok($1, 32) + 1)
    var %paramstr = $1
    var %tok
    while (%i < %imax) {
      %tok = $gettok(%paramstr, %i, 32)
      if ($left(%tok, 1) == -) {
        %tok = $replace(%tok, t,)
        %paramstr = $puttok(%paramstr, %tok, %i, 32)
      } 
      inc %i
    }
    return %paramstr
  }
  else {
    return $1
  }
}

; returns current %::echo's modes
alias -l ct.echomodes {
  var %i = 1
  var %imax = $numtok(%:echo, 32)
  var %tok
  while (%i <= %imax) {
    %tok = $gettok(%:echo, %i, 32)
    if ($left(%tok, 1) == -) {
      return %tok
    } 
    inc %i
  }
  return $null
}

; returns current %::echo's target
alias -l ct.echotarget {
  var %tok = $gettok(%:echo, $numtok(%:echo, 32), 32)
  if (($left(%tok, 1) == -) || (%tok > -1)) {
    return $null
  }
  else {
    return %tok
  }
}

; adds an empty line IF the last line in this window is not of the same type as the new - yet to be added - line
alias -l ct.spacer {
  if ((%ct.separation) && ($gettok(%:echo, 1, 32) == echo)) {
    var %modes = $ct.echomodes
    var %target = $iif(s isin %modes, status, $iif(a isin %modes, $active, $ct.echotarget))
    if (%target == $null) {
      if ($cid == $activecid) {
        %target = $iif($left($active, 1) != @, $active, status)
      }
      else {
        %target = status
      }
    }
    if ($hget(ct.sep, c $+ $cid $+ w $+ %target) != $1) {
      if ($hget(ct.sep, c $+ $cid $+ w $+ %target) != $null) {
        $ct.striptime(%:echo, $true) 
      }
      hadd -m ct.sep c $+ $cid $+ w $+ %target $1
    }
  }
}


; -------------
; Setup/Options
; -------------

; output onload message
alias ct.load {
  set %ct.separation $true
  set %ct.timestamp $true
  set %ct.tsmode 1
  set %ct.alignwidth 140
  set %ct.font $window($active).font
  set %ct.fontsize $window($active).fontsize
  set %ct.monoevents $true

  if ($hget(ct.sep) == $null) {
    hmake ct.sep 10
  }
  $ct.analyzefont(%ct.font, %ct.fontsize)

  $ct.spacer(ANY)
  ct.outline
  $ct.outspecial(Theme, *NEGATIVE ENTROPY*)
  $ct.outspecial(Author, Nyda (spam@nyda.info))
  $ct.outspecial(Date, 2005-04-25)
  $ct.outspecial(Version, 1.1)
  $ct.outspecial(Scheme, $1-)
  $ct.outspecial(Font, %ct.font at %ct.fontsize pixel)
  $ct.outspecial(Info, Your menubar has been extended with theme-specific options!)
  $ct.outspecial(, This theme is *only* about readability (nickspaces, text/event sep... Nothing fancy though.
  $ct.outspecial(Bugs?, If you encounter anything strange (i.e. misaligned nicks) read the readme!)
  ct.outline
}

; unset config
alias ct.unload {
  unset %ct.separation %ct.timestamp %ct.tsmode %ct.font %ct.fontsize %ct.alignwidth %ct.monoevents
  if ($hget(ct.sep) != $null) {
    hfree ct.sep
  }
  if ($hget(ct.fnt) != $null) {
    hfree ct.fnt
  }
}

; manually set new font, optimize script for it
alias ct.font.set {
  set %ct.font $1
  set %ct.fontsize $2
  $ct.analyzefont(%ct.font, %ct.fontsize)
}

; switches true to false and vice versa
; fixme: huh?
alias ct.switch {
  if ($1 == $true) {
    return $false
  } 
  else {
    return $true
  }   
}


; -------------
; Display stuff
; -------------

; 2003-12-30: Kamek requested variable-lenght seperator lines
; I think auto-adapting lenghts should be ok?
alias ct.outline {
  ; attempt to detect window width
  var %target $ct.echotarget

  ; if we have a target, check size
  if (%target != $null) {
    var %cw $width(—, $window(%target).font, $window(%target).fontsize, 0, 0)
    var %tsw $width($strip($timestamp), $window(%target).font, $window(%target).fontsize, 0, 0)
    var %count $calc(($window(%target).dw - %tsw) / %cw -1)
    $ct.outecho( $+ %::c1 $+ $str(—, %count))
  }
  else {
    $ct.outecho( $+ %::c1 $+ ——————————————————————————————————————————————————————)
  }
}

; output echo
alias ct.outecho {
  ct.timestamp.refresh
  ct.spacer ECHO
  $ct.striptime(%:echo) $1-
}
; output normal text-message
; 2003-12-30: fixed eating numbers at the beginning of highlighted lines. Thanks narok
alias ct.outtext {
  ct.timestamp.refresh
  ct.spacer TEXT

  if (($highlight($4) != $null) || ($highlight($eval($2, 2)).nicks == $true)) {
    var %col  $+ $calc($highlight($eval($2, 2) $4).color)
    $ct.striptime(%:echo) %col $+ $1 $+  $+ $ct.align($1, %col $+ $chr(91) $+ $3 $+ $2 $+ $chr(93) $+ ) %col $+  $+ $4- $+ 
  }
  else {
    $ct.striptime(%:echo) $1 $+ $ct.align($1,  $+ %::c1 $+ $chr(91) $+  $+ $ct.nick($2, $3) $+  $+ %::c1 $+ $chr(93) $+  )  $+ %::c2 $+ $4- $+ 
  }
}
; output emote-message (/me is nice)
alias ct.outemote {
  ct.timestamp.refresh
  ct.spacer TEXT

  if (($highlight($4) != $null) || ($highlight($eval($2, 2)).nicks == $true)) {
    var %col  $+ $calc($highlight($eval($2, 2) $4).color)
    $ct.striptime(%:echo) %col $+ $1 $+  $+ $ct.align($1, %col $+ $3 $+ $2 $+ ) %col $+  $+ $4- $+ 
  }
  else {
    $ct.striptime(%:echo) $1 $+ $ct.align($1, $ct.nick($2, $3) )  $+ %::c2 $+ $4- $+ 
  }
}
; output system-message (modes, joins...)
alias ct.outevent {
  ct.timestamp.refresh
  ct.spacer SYS

  if ($highlight($eval($2, 2)).nicks == $true) {
    var %col  $+ $calc($highlight($eval($2, 2) $4).color)
    $ct.striptime(%:echo) %col $+ $1 $+  $+ $ct.align($1, %col $+ $3 $+ $2 $+ ) %col $+  $+ $4- $+ 
  }
  else {
    if (%ct.monoevents) {
      $ct.striptime(%:echo) $1 $+ $ct.align($1,  $+ %::c3 $+ $3 $+ $2)) $4- $+ 
    }
    else {
      $ct.striptime(%:echo) $1 $+ $ct.align($1, $3 $+ $2)) $4-
    }
  }
}
; output special text (/whois, names...) - NO SPACER, NO TIMESTAMP
alias ct.outspecial {
  ct.timestamp.refresh
  $ct.striptime(%:echo, $true) $ct.align($null,  $+ %::c1 $+ $chr(91) $+  $+ %::c2 $+ $1 $+  $+ %::c1 $+ $chr(93) $+  )  $+ %::c2 $+  $+ $2- $+ 
}

; output whois result
alias ct.whois {
  ct.outline
  $ct.outspecial(WhoIs, $1)
  $ct.outspecial(Server, $2)
  $ct.outspecial(Address, $3)
  $ct.outspecial(Name, $4)
  if (%ct.auth != $null) {
    $ct.outspecial(Auth, $replace(%ct.auth, is authed as,))
    unset %ct.auth
  }
  $ct.outspecial(Channel, $5)
  if ($6 != is not) {
    $ct.outspecial(Status, IRC Operator)
    $ct.outspecial(OperLine, $8)
  }
  if ($10 != $null) {
    $ct.outspecial(Signed on, $10)
  }
  if ($9 != $null) {
    $ct.outspecial(Idle, $duration($9))
  }
  if ($11 != $null) {
    $ct.outspecial(Away, $11)
  }
  ct.outline
}

; output notify text
alias ct.notify {
  ct.outline
  $ct.outspecial(Notify for, $2)
  $ct.outspecial(Status, $1)
  $ct.outspecial(Address, $3)
  $ct.outspecial(Note, $4)
  ct.outline
}

; if joining a channel, store topic for later use. otherwise output it
alias ct.topic {
  set -u10 %ct.topicinfo $1-

  if (%ct.injoin != $true) {
    ct.outline
    $ct.outspecial(Topic, %ct.topictext)
    $ct.outspecial(Set by, $gettok(%ct.topicinfo, 1,32))
    $ct.outspecial(Date, $gettok(%ct.topicinfo, 2-,32))
    ct.outline
    unset %ct.topictext %ct.topicinfo
  }
}

; output join message and topic
alias ct.join {
  ct.outline
  $ct.outspecial(Channel, %::chan)
  $ct.outspecial(Modes, %ct.joinmodes)
  $ct.outspecial(Created, $asctime($1))
  if (%ct.topictext != $null) {
    ;    $ct.striptime(%:echo, $true) 
    ;$ct.outecho( $+ %::c1 $+ ——————————————————————————————————————————————————————————————)
    $ct.outspecial(Topic, %ct.topictext)
    $ct.outspecial(Set by, $gettok(%ct.topicinfo, 1,32))
    $ct.outspecial(Date, $gettok(%ct.topicinfo, 2-,32))
  }
  ct.outline
  unset %ct.topictext %ct.topicinfo %ct.injoin %ct.joinmodes
}

; output names on /names
alias ct.names {
  if (%ct.injoin) return
  if (%ct.innames != $true) {
    set -u10 %ct.innames $true
    ct.outline
    $ct.outspecial(Channel, $1)
  }
  $ct.outspecial(Names, $3-)
}
alias ct.namesend {
  if (%ct.injoin) return
  unset %ct.innames
  ct.outline
}
