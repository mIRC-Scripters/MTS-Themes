; ––––––––––––––––––––––––––––––––––––––––
;
; 	* Outpost Theme 2.3 *
; 
; Author:
;	Zyberdog <zyberdog@quakenet.org>
;
; Description:
;	Aligned MTS theme using the all too famous Tahoma font. Inspiration gather from Negative Entropy (by Darksadin) and Winter (by greeny).
;	Optimized for use with NNscript and/or QuakeNet/Undernet.
;
; Changelog:
;   v2.3 (01/03/2004)
;	* Optimized alignment system.
;	* Fixed unloading error.
;   v2.2 (19/12/2003)
;	+ Added support for notices from -psyBNC (More noticeable).
;	* Changed highlighting to only color the word, and not the whole line. (only with actions)
;	* Fixed bug where topics would be a weird color.
;	* Fixed bug in scheme 10 (xemacs (aligned)) where channel text weren't themed.
;   v2.1 (08/12/2003)
;	- First public release.
;
; ––––––––––––––––––––––––––––––––––––––––

alias outpost.load {
  set %outpost.alignwidth 160
  set %outpost.font $window($active).font
  set %outpost.fontsize $window($active).fontsize
  if (!$hget(outpost.sep)) { hmake outpost.sep 10 }
  $outpost.analyzefont(%outpost.font, %outpost.fontsize)
  echo -a × You have successfully loaded `Outpost v2.3´ by `Zyberdog <zyberdog@quakenet.org>´ 
}
alias outpost.unload {
  echo -a × You have successfully unloaded `Outpost v2.3´ by `Zyberdog <zyberdog@quakenet.org>´ 
  unset %outpost.*
  if ($hget(outpost.sep)) { hfree outpost.sep }
  if ($hget(outpost.cnt)) { hfree outpost.fnt }
}
alias outpost.whois {
  if (!$hget(outpost.sep)) { 
    set %outpost.alignwidth 160
    set %outpost.font $window($active).font
    set %outpost.fontsize $window($active).fontsize
    hmake outpost.sep 10
    $outpost.analyzefont(%outpost.font, %outpost.fontsize)
  }
  %:echo 02([12 /whois initiated 02])
  %:echo $+(02 × 1,%::nick, 12is ',%::realname,12') 02[12 $+ %::address $+ 02]
  if (%thm.ownip) { %:echo 02 ×11 $+(,%::nick,) 12actual host is $gettok($ifmatch,1,32) 02[12 $+ $gettok($ifmatch,2,32) $+ 02] }
  if ($q.net) && (%thm.auth) { %:echo $+(02 ×11 ,%::nick, 12is authed as ',$ifmatch,12') }
  if (%::operline) { %:echo $+(02 ×11 ,%::nick, 12,is) an IRC Operator }
  if (%::chan) {
    var %m,%c = $regsub(%::chan,/(^-| -)/g,$chr(32),%m),%i = $numtok(%m,32),%o,%h,%v,%r
    while (%i) {
      var %t = $gettok(%m,%i,32),%p = $left(%t,1),%l = $right(%t,-1),%g = $+($iif($me ison %l,),%l,)
      if (%p == @) { %o = $addtok(%o,%g,32) }
      elseif (%p == %) { %h = $addtok(%h,%g,32) }
      elseif (%p == +) { %v = $addtok(%v,%g,32) }
      else { %r = $addtok(%r,$+($iif($me ison %t,),%t,),32) }
      dec %i
    }
    if (%o) { %:echo 02 ×11 $+(,%::nick,) 12opped in %o }
    if (%h) { %:echo 02 ×11 $+(,%::nick,) 12halfopped in %h }
    if (%v) { %:echo 02 ×11 $+(,%::nick,) 12voiced in %v }
    if (%r) { %:echo 02 ×11 $+(,%::nick,) 12reg in %r }
  }
  if (%::wserver) { %:echo 02 ×11 $+(,%::nick,) 12using %::wserver 02[12 $+ %::serverinfo $+ 02] }
  if (%::away) { %:echo 02 ×11 $+(,%::nick,) 12is away: %::away }
  if ($notify(%::nick)) { %:echo 02 ×11 $+(,%::nick,) 12is on your Notify list }
  if (%::idletime) {
    %:echo 02 ×11 $+(,%::nick,) 12has been idle for $duration(%::idletime)
    %:echo 02 ×11 $+(,%::nick,) 12signed on $duration($calc($ctime - $ctime(%::signontime))) ago 02[12 $+ %::signontime $+ 02]
  }
  %:echo 02([12 /whois terminated 02])
  unset %thm.auth %thm.ownip
}
alias outpost.whowas {
  %:echo 02([12 /whowas initiated 02])
  %:echo 02 ×11 $+(1,%::nick, 12was ',%::realname,12') 02[12 $+ %::address $+ 02]
  if (%::wserver) { %:echo 02 ×11 $+(,%::nick, 12using) %::wserver }
  if (%::serverinfo) { %:echo 02 ×11 $+(,%::nick, 12quit) $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss) }
  %:echo 02([12 /whowas terminated 02])
}
alias outpost.whois.align {
  ;if using a theme_preview system, we want it to use the nick-align system too.
  if (!$hget(outpost.sep)) { 
    set %outpost.alignwidth 160
    set %outpost.font $window($active).font
    set %outpost.fontsize $window($active).fontsize
    hmake outpost.sep 10
    $outpost.analyzefont(%outpost.font, %outpost.fontsize)
  }
  %:echo 02([12 /whois initiated 02])
  %:echo 02 × $outpost.align(,1 $+ %::nick $+  12is) ' $+ %::realname $+ 12' 02[12 $+ %::address $+ 02]
  if (%thm.ownip) { %:echo 02 × $outpost.align(,12actual host is:) $gettok(%thm.ownip,1,32) 02[12 $+ $gettok(%thm.ownip,2,32) $+ 02] }
  if ($q.net) && (%thm.auth) { %:echo 02 × $outpost.align(,12authed as:) ' $+ %thm.auth $+ 12' }
  if (%::operline) { %:echo 02 × $outpost.align(,12is) an IRC Operator }
  if (%::chan) {
    var %m,%c = $regsub(%::chan,/(^-| -)/g,$chr(32),%m),%i = $numtok(%m,32),%o,%h,%v,%r
    while (%i) {
      var %t = $gettok(%m,%i,32),%p = $left(%t,1),%l = $right(%t,-1),%g = $+($iif($me ison %l,),%l,)
      if (%p == @) { %o = $addtok(%o,%g,32) }
      elseif (%p == %) { %h = $addtok(%h,%g,32) }
      elseif (%p == +) { %v = $addtok(%v,%g,32) }
      else { %r = $addtok(%r,$+($iif($me ison %t,),%t,),32) }
      dec %i
    }
    if (%o) { %:echo 02 × $outpost.align(,12opped in:) %o }
    if (%h) { %:echo 02 × $outpost.align(,12halfopped in:) %h }
    if (%v) { %:echo 02 × $outpost.align(,12voiced in:) %v }
    if (%r) { %:echo 02 × $outpost.align(,12reg in:) %r }
  }
  if (%::wserver) { %:echo 02 × $outpost.align(,12using:) %::wserver 02[12 $+ %::serverinfo $+ 02] }
  if (%::away) { %:echo 02 × $outpost.align(,12away:) %::away }
  if (%::idletime) {
    %:echo 02 × $outpost.align(,12idle:) $duration(%::idletime)
    %:echo 02 × $outpost.align(,12signed on:) $duration($calc($ctime - $ctime(%::signontime))) ago 02[12 $+ %::signontime $+ 02]
  }
  %:echo 02([12 /whois terminated 02])
  unset %thm.auth %thm.ownip
}
alias outpost.whowas.align {
  %:echo 02([12 /whowas initiated 02])
  %:echo 02 × $outpost.align(,11 $+ 1 $+ %::nick $+  12was) ' $+ %::realname $+ 12' 02[12 $+ %::address $+ 02]
  if (%::wserver) { %:echo 02 × $outpost.align(,11 $+  $+ %::nick $+  12using:) %::wserver }
  if (%::serverinfo) { %:echo 02 × $outpost.align(,11 $+  $+ %::nick $+  12quit:) $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss) }
  %:echo 02([12 /whowas terminated 02])
}
alias nn.tsd { return $+(02,$chr(91),12,$1-,02,$chr(93),12) }
alias nn.tgt { return $+(12,$lower($1-)) }
alias nn.tgtd { return $+(12,$lower($1-),$chr(44)) }
alias nn.linesep { return 02([ }

; output normal text-message
alias outpost.outtext {
  if ($highlight($4)) && ($2 != $me) {
    var %col  $+ $calc($highlight($4).color)
    %:echo $1 $+  $+ $outpost.align($1, 02 $+ $iif($right($1,3) != msg,$chr(91),*) $+  $+ $3 $+  $+ $2 $+ 02 $+ $iif($right($1,3) != msg,$chr(93),*) $+ )  $+ $replace($strip($4-),$eval($highlight($4-),2),$+($chr(31),$chr(3),%col,$eval($highlight($4-),2),$chr(15))) $+ 
  }
  else {
    %:echo $1 $+ $outpost.align($1, 02 $+ $iif($right($1,3) != msg,$chr(91),*) $+  $+ $3 $+  $+ $2 $+ 02 $+ $iif($right($1,3) != msg,$chr(93),*) $+ )  $+ $4- $+ 
  }
}
; output emote-message (/me is nice)
alias outpost.outemote {
  if ($highlight($4)) && ($2 != $me) {
    var %col  $+ $calc($highlight($4).color)
    %:echo $1 $+  $+ $outpost.align($1,02 $+ $3 $+ $2) 02 $+ $replace($strip($4-),$eval($highlight($4-),2),$+($chr(31),$chr(3),%col,$eval($highlight($4-),2),$chr(15),$chr(3),02)) $+ 
  }
  else {
    %:echo $1 $+ $outpost.align($1,02 $+ $3 $+ $2) 02 $+ $4- $+ 
  }
}
alias outpost.outevent {
  %:echo $outpost.align(,$1) $2-
}
alias outpost.align {
  if (%outpost.alignwidth > 0) {
    var %gapsize = $calc(%outpost.alignwidth - $width($strip($timestamp $+ $1 $+ $2), %outpost.font, %outpost.fontsize, 0, 0))
    var %basesize = $remove($hget(outpost.fnt, first),s)

    if (%gapsize > %basesize) {    
      var %count = $int($calc(%gapsize / %basesize))
      var %mod = $calc(%gapsize - (%basesize * %count))
      if (%mod > 0) {
        return 11 $+ $chr( $hget(outpost.fnt, s $+ $calc(%mod + %basesize)) ) $+ $str($chr($hget(outpost.fnt, s $+ %basesize)) $+ $chr(15), $calc(%count -1)) $+  $2
      }
      else {
        return 11 $+ $str($chr($hget(outpost.fnt, s $+ %basesize)) $+ $chr(15), %count)) $+  $2
      }
    }
  }
  return 11  $+ $2
}
on 1:start: {
  if ($hget(outpost.sep) == $null) {
    hmake outpost.sep 10
  }
  $outpost.analyzefont(%outpost.font, %outpost.fontsize)
}
alias -l outpost.analyzefont {
  ; make sure outpost.fnt is empty
  if ($hget(outpost.fnt)) {
    hfree outpost.fnt
  }
  hmake outpost.fnt 10

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
          hadd outpost.fnt first s $+ %s
        } 
        ;echo Width %s $+ : chr( $+ %i $+ ) < $+ $chr(%i) $+ >
        hadd outpost.fnt s $+ %s %i
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
    if ($hget(outpost.fnt, s $+ %s) == $null) {
      %optimizable = $false
      break
    }
    inc %s
  }
  if (%optimizable) {
    hadd outpost.fnt first s $+ %spcwidth
    hadd outpost.fnt s $+ %spcwidth 32
  }
}
