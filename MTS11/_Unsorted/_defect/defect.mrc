;
; ( [[ defect/0.3r1 ],mts
;      =  ( all that is sexy ..] )
;    ! .. erawtic ),.  .
;

alias -l dver return defect/0.3r1

alias _defect.loaded {
  var %c = $iif($1 == var,_var)

  if (!$hget(@_defect@theme_@)) hmake @_defect@theme_@ 1
  if ($isfile(" $+ $scriptdirdefect.hsh")) hload @_defect@theme_@ " $+ $scriptdirdefect.hsh"
  else {
    hadd @_defect@theme_@ align 1
    hadd @_defect@theme_@ hibold 1
  }
  _defect.listbegin $+ %c
  _defect.listtext $+ %c $dver loaded2..
  _defect.listsep $+ %c
  _defect.listtext $+ %c note to users:
  _defect.listtext $+ %c if you'd like to turn on/off nickname alignment or
  _defect.listtext $+ %c the bold-highlighting, you can use the following:
  _defect.listtext $+ %c
  _defect.listtext $+ %c /defect.toggle align
  _defect.listtext $+ %c /defect.toggle hibold
  _defect.listtext $+ %c
  _defect.listtext $+ %c this will toggle either option on and off. although
  _defect.listtext $+ %c bold highlighting has been seriously
  _defect.listend $+ %c
}
alias _defect.unload {
  if ($hget(@_defect@theme_@)) {
    hsave -o @_defect@theme_@ " $+ $scriptdirdefect.hsh"
    hfree @_defect@theme_@
  }
}

; this is for checking if align nicks and bold highlighting is on
alias -l d return $hget(@_defect@theme_@,$1)

; this is for turning the aligning and highlighting on or off
alias defect.toggle {
  set -u %:echo echo $iif(@* iswm $active,-s,-a) $+ ti3
  if ($1 == $null) {
    var %c = $iif($istok(Verdana Tahoma,$window($active).font,32),_var)
    _defect.listbegin $+ %c
    _defect.listtext $+ %c $dver toggles
    _defect.listsep $+ %c
    _defect.listtext $+ %c align    nick alignment       $+ $iif($d(align),on,off)
    _defect.listtext $+ %c hibold   bold highlighting    $+ $iif($d(hibold),on,off)
    _defect.listtext $+ %c
    _defect.listtext $+ %c use /defect.toggle <align|hibold> to toggle
    _defect.listend $+ %c
  }
  elseif ($istok(align hibold,$1,32)) {
    hadd @_defect@theme_@ $1 $iif($d($1),0,1)
    _defect_echo >> $iif($1 == align,nick aligning,bold highlighting) is now  $+ $iif($d($1),on,off)
  }
}


; this sucks. for formatting the %:echo variable
alias -l e {
  var %i = 1, %n, %r, %x, %w
  while ($gettok(%:echo,%i,32)) {
    %x = $ifmatch
    if ($istok(echo console_echo aline iline,%x,32)) {
      inc %i
      while ($gettok(%:echo,%i,32)) {
        %x = $ifmatch
        if (-* iswm %x) {
          %r = $regsub(%x,/i([0-9]+)/g,$null,%x)
          %:echo = $gettok(%:echo,1- $+ $calc(%i - 1),32) $iif(- isin %x,%x $+ i $+ $1,-i $+ $1) $gettok(%:echo,$calc(%i + 1) $+ -,32)
          goto end
        }
        inc %i
      }
      %:echo = $gettok(%:echo,1,32) $iif($gettok(%:echo,2,32) isnum,$ifmatch) -i $+ $1 $gettok(%:echo,$iif($gettok(%:echo,2,32) isnum,3-,2-),32)
    }
    inc %i
  }
  :end
  set -u %:echo %:echo
  return %:echo
}

alias -l u return $str( $+ $chr(32),$1)
alias -l @ return $replace($1-,@,8@03,%,8%03,+,8+03,.,8.03)

alias _defect_align return $str( ,$calc(9 - $len($1))) $+ $left($1,9)
alias _defect_aline return $iif($len($1) > 10,$left($1,8) $+ 2..,$left($1,10)) $+ $str( ,$calc(10 - $len($1)))
alias _defect_cmode return $iif(%::cmode,%::cmode, )
alias _defect_echo  scid $cid | $e($iif($iif($window(%::target),$window(%::target).stamp,$iif($window(%::chan),$window(%::chan).stamp,$iif($window(%::nick),$window(%::nick).stamp,$window($active).stamp))),$calc($len($strip($timestamp)) + 5),4)) $1-
alias _defect_pad   return $left($2-,$1) $+ $str( $+ $chr(32),$calc($1 - $len($2)))

alias _defect_bold {
  if (!$d(hibold)) return $3-
  var %r, %x, %c1 = $1, %c2 = $2
  while ($len(%c1) < 2) %c1 = 0 $+ %c1
  while ($len(%c2) < 2) %c2 = 0 $+ %c2
  %r = $regsub($3-,/([^]*)/g,$+(,%c1,$!1,,%c2),%x)
  return $replace(%x,, $+ %c1)
}

alias _defect.textchan    scid $cid | $e($iif($window(%::chan).stamp,$iif($d(align),$calc($len($strip($timestamp)) + 14),$calc($len(%::nick) + ($len($strip($timestamp)) + 5))),$iif($d(align),13,$calc($len(%::nick) + 4)))) %::timestamp 1[4 $+ $_defect_cmode $+ $iif($1 == $me,08,$iif($me isin $strip($2-),07,06)) $+ $iif($d(align),$_defect_align($1),$1) $+ 1]3 $_defect_bold(4,3,$replace($2-,,03))
alias _defect.textquery   scid $cid | var %w = $iif($1 == $me,%::nick,$1) | $e($iif($window($iif($window(%w),%w,$+(=,%w))).stamp,$iif($d(align),$calc($len($strip($timestamp)) + 13),$calc($len(%::nick) + ($len($strip($timestamp)) + 4))),$iif($d(align),12,$calc($len(%::nick) + 4)))) %::timestamp 1[ $+ $iif($1 == $me,08,$iif($me isin $strip($2-),07,06)) $+ $iif($d(align),$_defect_align($1),$1) $+ 1]3 $_defect_bold(4,3,$replace($2-,,03))
alias _defect.textmsg     scid $cid | $e($iif($window($iif($activecid != $cid,status window,$active)).stamp,$calc($len($strip($timestamp)) + 2),2)) %::timestamp 1(08 $+ $2 $+ 1[06 $+ $replace($iif(@* iswm $1,$1,%::address),@,8@06) $+ 1])3 $_defect_bold(4,3,$replace($3-,,03))
alias _defect.actionchan  scid $cid | $e($calc($iif($window(%::chan).stamp,12,3) + $len($1))) %::timestamp $iif($1 == $me,7,6) $+ $replace($_defect_cmode, ,!) $1 $_defect_bold($iif($1 == $me,8,7),$iif($1 == $me,7,6),$replace($2-,, $+ $iif($1 == $me,07,06) $+ ))
alias _defect.actionquery scid $cid | var %w = $iif($1 == $me,%::target,$1) | $e($calc($iif($window($iif($window(%w),%w,$+(=,%w))).stamp,12,3) + $len($1))) %::timestamp $iif($1 == $me,7,6) $+ ! $1 $_defect_bold($iif($1 == $me,8,7),$iif($1 == $me,7,6),$replace($2-,, $+ $iif($1 == $me,07,06) $+ ))
alias _defect.ctcp        scid $cid | $e($iif($window($iif($activecid != $cid,status window,$active)).stamp,13,4)) %::timestamp %::pre 08 $+ $2 1[06 $+ $replace(%::address,@,8@06) $+ 1]6 requested 1[04 $+ $_defect_bold(4,3,$iif($4 != $null,$3 03 $+ $4-,$3)) $+ 1]6 from 08 $+ %::target
alias _defect.notice      scid $cid | $e($iif($window($iif($activecid != $cid,status window,$active)).stamp,10,2)) %::timestamp 1-08 $+ $2 $+ 1(06 $+ $replace($iif(@* iswm $1,$1,%::address),@,8@06) $+ 1)-3 $_defect_bold(4,3,$3-)
alias _defect.out         scid $cid | $e($iif($window($iif($activecid != $cid,status window,$active)).stamp,11,3)) %::timestamp 4-> 1(06 $+ $1 $+ 1/08 $+ $iif(@* iswm $2,$right($2,-1),$2) $+ 1)3 $_defect_bold(4,3,$3-)

alias _defect.textchan_var  scid $cid | $e($iif($window(%::chan).stamp,$calc($len(%::nick) + ($len($strip($timestamp)) + 5)),$calc($len(%::nick) + 4))) %::timestamp 1[4 $+ $_defect_cmode $+ $iif($1 == $me,08,$iif($me isin $strip($2-),07,06)) $+ $1 $+ 1]3 $_defect_bold(4,3,$replace($2-,,03))
alias _defect.textquery_var scid $cid | var %w = $iif($1 == $me,%::nick,$1) | $e($iif($window($iif($window(%w),%w,$+(=,%w))).stamp,$calc($len(%::nick) + ($len($strip($timestamp)) + 4)),$calc($len(%::nick) + 4))) %::timestamp 1[ $+ $iif($1 == $me,08,$iif($me isin $strip($2-),07,06)) $+ $1 $+ 1]3 $_defect_bold(4,3,$replace($2-,,03))

alias _defect_join {
  var %x, %i = $calc($ialchan(*@ $+ $gettok(%::address,2,64),%::chan,0) - 1)
  var %p = $iif(%i && x !isincs $usermode && _ !isin %::pre,5Ú6Ä7Ä,%::pre)
  if ($1 == desert) _defect_echo %::timestamp %p 8join1/06 $+ $lower(%::chan) 1(07 $+ %::nick $+ 1/05 $+ $replace(%::address,@,7@05) $+ 1)
  else _defect_echo %::timestamp %p 08 $+ %::nick 1[06 $+ $replace(%::address,@,8@06) $+ 1]7 has arrived2..
  if (%i && x !isincs $usermode) {
    %i = 1
    while ($ialchan(*@ $+ $gettok(%::address,2,64),%::chan,%i).nick) {
      if ($ifmatch != %::nick) %x = %x $ifmatch
      inc %i
    }
    %:echo %::timestamp $iif(_ isin %::pre,%::pre,5À6Ä7ÄÄÄ) 08 $+ %::nick 3is a clone of 04 $+ $numtok(%x,32) 3user $+ $iif($numtok(%x,32) != 1,s) 1[03 $+ $replace(%x,$chr(32),$chr(44) $+ $chr(32)) $+ 1]
  }
}

alias _defect.whois_default {
  var %n = $lower($left(%::nick,24)), %i = $calc(24 - $len(%n))
  set -u %:echo $e($iif($window($active).stamp,27,18))
  %:echo %::timestamp  7ÚÄ6Ä7ÄÄ6Ä5Ä6  Ä Ä5- $u(2) 5Ä - $u(14) 6Ä  7Ä Ä6Ä  5Ä6Ä7Ä.
  %:echo %::timestamp  7³ 6.Ä7Ä5[4 %n 5]7ÄÄ6Ä 7Ä  6Ä 5Ä- - $+ $u(%i) 5:
  %:echo %::timestamp  6: 5:7 $u(3) $replace($lower(%::address),@,4@07,.,4.07) $+ 7.6.5.
  %:echo %::timestamp  6.
  %:echo %::timestamp  5. $u(4) 8irc name 6!3 $_defect_bold(4,3,%::realname)
  if (%::chan) %:echo %::timestamp $u(7) 8channels 6!3 $replace($_defect_bold(4,3,$lower(%::chan)),@#,7@03#,%#,7%03#,+#,7+03#)
  if (%::text) %:echo %::timestamp  5. $u(4) 8away $u(4) 6!3 $_defect_bold(4,3,%::text)
  if (%::idletime) %:echo %::timestamp $u(7) 8idletime 6!3 $remove($duration(%::idletime),ks,k,ays,ay,rs,r,ins,in,ecs,ec) $iif(%::signontime,$+(1,$chr(40),2signed on $remove($duration($calc($ctime - $ctime(%::signontime $asctime(yyyy)))),ks,k,ays,ay,rs,r,ins,in,ecs,ec) ago1,$chr(41)))
  if (%::isoper == is) %:echo %::timestamp $u(7) 8ircop $u(3) 6!4 %n 3watches martha stewart
  %:echo %::timestamp  5. $u(4) 8server $u(2) 6!3 $replace($lower(%::wserver),.,7.03) $iif(%::serverinfo,$+(1,$chr(40),02,$lower($_defect_bold(3,2,%::serverinfo)),1,$chr(41)))
  if (%::actual) %:echo %::timestamp  5. $u(4) 8realhost 6!3 $replace($lower(%::actual),.,7.03)
  if (%::isregd == is) %:echo %::timestamp  5. $u(4) 8reg'd $u(3) 6!4 %n 3is a registered nick 1(2like you care..1)
  %:echo %::timestamp  6: $u(44) 5.
  %:echo %::timestamp  6'ÄÄ5Ä  Ä6Ä $u(3) -7Ä Ä $u(3) 6Ä- 5- $u(21) 6:
  %:echo %::timestamp $u(7) 5-Ä  5Ä 6Ä7Ä  8Ä7ÄÄ  6Ä Ä  Ä5Ä6ÄÄ5Ä[7 end whois 5]Ä6Ä7Ù
}

alias _defect.whois_desert {
  set -u %:echo $e($iif($window($active).stamp,24,15))
  %:echo %::timestamp  7ÚÄÄ6Ä7ÄÄ6Ä7Ä6Ä5Ä6ÄÄ5Â6ÄÄ5Ä6Ä5ÄÄÄ1- -5ÄÄÄ6Ä7Ä6ÄÄÄÄÄ7ÄÄÄ6Ä7ÄÄ6ÄÄÄÄ5Ä6Ä7Ä6Ä5ÄÄÄ1-
  %:echo %::timestamp  7³8 $_defect_align(%::nick) 5³7 $replace(%::address,@,4@07)
  %:echo %::timestamp  7³5Ú[7irc name5]Ù3 $_defect_bold(4,3,%::realname)
  if (%::actual) %:echo %::timestamp  7³5³[7actual  5] 3 %::actual
  if (%::chan) %:echo %::timestamp  7³5³[7channels5] 3 $replace(%::chan,@#,7@03#,%#,7%03#,+#,7+03#)
  %:echo %::timestamp  7³5À[7server 5 ]¿3 %::wserver $iif(%::serverinfo,$+(1,$chr(40),02,$_defect_bold(3,2,%::serverinfo),1,$chr(41)))
  if (%::text) %:echo %::timestamp  7³ 5[7away   5 ]³3 $_defect_bold(4,3,%::text)
  if (%::idletime) %:echo %::timestamp  7³ 5[7idletime5]³3 $duration(%::idletime) $iif(%::signontime,$+(1,$chr(40),02signon: %::signontime,1,$chr(41)))
  if (%::isoper == is) %:echo %::timestamp  7³ 5[7ircop  5 ]³4 %::nick 3is a candykid
  %:echo %::timestamp  7ÀÄÄ6Ä7ÄÄ6Ä7Ä6Ä5Ä6ÄÄ5Á6ÄÄ5Ä6Ä5ÄÄÄ1- -5ÄÄÄ6Ä7Ä6ÄÄÄÄÄ7ÄÄÄ6Ä7ÄÄ6ÄÄÄÄ5Ä6Ä7Ä6Ä5ÄÄÄ1-
}

alias _defect.whois_hydrous {
  var %n = $left(%::nick,20), %i = $calc(20 - $len(%n))
  set -u %:echo $e($iif($window($active).stamp,21,12))
  %:echo %::timestamp   5Ú6ÄÄ7ÄÄÄÄÄÄ $+ $str(Ä,$len(%n)) $+ 6ÄÄ5¿
  %:echo %::timestamp  5ÖÅ6Ä[7whois5/08 $+ %n $+ 6]6Ä5Á $+ $str(Ä,%i) $+ Ä- ÄÄÄÄ-  Ä- -
  %:echo %::timestamp  5ºÀ6ÄÄ7ÄÄÄÄÄ¿6 $replace(%::address,@,8@06)
  if (%::actual) %:echo %::timestamp  5º  6r7eal  ³3 %::actual
  %:echo %::timestamp  5º  6n7ame  ³3 $_defect_bold(4,3,%::realname)
  if (%::text) %:echo %::timestamp  5º  6a7way  ³3 $_defect_bold(4,3,%::text)
  if (%::chan) %:echo %::timestamp  5º  6c7han  ³3 $replace(%::chan,@#,7@03#,%#,7%03#,+#,7+03#)
  if (%::idletime) %:echo %::timestamp  5º  6i7dle  ³3 $remove($duration(%::idletime),ks,k,ays,ay,rs,r,ins,in,ecs,ec) $iif(%::signontime,$+(1[2connected: $remove($duration($calc($ctime - $ctime(%::signontime $asctime(yyyy)))),ks,k,ays,ay,rs,r,ins,in,ecs,ec),1]))
  %:echo %::timestamp  5º  6s7erv  ³3 %::wserver $iif(%::serverinfo,$+(1[02,$_defect_bold(3,2,%::serverinfo),1]))
  if (%::isoper == is) %:echo %::timestamp  5º  6o7per  ³4 %::nick 3praises allah
  %:echo %::timestamp  5Ó¿       7Ã $+ $str(Ä,$len(%n)) $+ 6ÄÄ5Ä $+ $str(Ä,%i) $+ Ä- ÄÄÄÄ-  Ä- -
  %:echo %::timestamp   5À6ÄÄ7ÄÄÄÄÄÙ
}

alias _defect.whois_var {
  set -u %:echo $e($iif($window($active).stamp,21,12))
  %:echo %::timestamp  7__6_7__6_5_6____5_6___7_6____7__6_7___6_  _   5_     6_ 5_
  %:echo %::timestamp 7: 6.7-8-6[4 %::nick 6]8--7--6-7- 6-5-   6- 5-
  %:echo %::timestamp 6: 5:6  $replace(%::address,@,8@06)
  if (%::actual) %:echo %::timestamp 5.  8actual6:3 $replace(%::actual,.,7.03)
  %:echo %::timestamp $iif(%::actual, ,5.)  8irc name6:3 $_defect_bold(4,3,%::realname)
  if (%::text) %:echo %::timestamp    8away6:3 $_defect_bold(4,3,%::text)
  if (%::chan) %:echo %::timestamp    8channels6:3 $replace(%::chan,@#,7@03#,%#,7%03#,+#,7+03#)
  if (%::idletime) %:echo %::timestamp    8idle time6:3 $remove($duration(%::idletime),ks,k,ays,ay,rs,r,ins,in,ecs,ec) $iif(%::signontime,$+(1[2connected: $remove($duration($calc($ctime - $ctime(%::signontime $asctime(yyyy)))),ks,k,ays,ay,rs,r,ins,in,ecs,ec),1]))
  %:echo %::timestamp $iif(%::isoper == is, ,5.)  8server6:3 %::wserver $iif(%::serverinfo,$+(1[02,$_defect_bold(3,2,%::serverinfo),1]))
  if (%::isoper == is) %:echo %::timestamp 5.  8operator6:4 %::nick 3watches martha stewart
  %:echo %::timestamp 6:
  %:echo %::timestamp  7¯¯6¯7¯¯6¯5¯6¯¯¯¯5¯6¯¯¯7¯6¯¯¯¯7¯¯6¯7¯¯¯6¯  ¯   5¯     6¯ 5¯
}

alias _defect.listbegin %:echo %::timestamp  8ÚÄ7ÄÄÄÄ6Ä7Ä6ÄÄÄÄ 7Ä6Ä5Ä6Ä5ÄÄ  ÄÄ 6 Ä $u(3) 5ÄÄ 6Ä 7- $u(6) 6-Ä  7Ä 6Ä5Ä6Ä 5Ä  -
alias _defect.listtext  $e($iif($window($active).stamp,12,3)) %::timestamp  8³3 $_defect_bold(4,3,$replace($1-,,03))
alias _defect.listsep   %:echo %::timestamp  8Ã7Ä6- $u(4) - 7-8Ä¿ | %:echo %::timestamp  8ÃÄ7- 6- $u(4) 6-7Ä8Ù
alias _defect.listend   %:echo %::timestamp  8ÀÄ7ÄÄÄÄ6Ä7Ä6ÄÄÄÄ 7Ä6Ä5Ä6Ä5ÄÄ  ÄÄ 6 Ä $u(3) 5ÄÄ 6Ä 7- $u(6) 6-Ä  7Ä 6Ä5Ä6Ä 5Ä  -

alias _defect.listbegin_var %:echo %::timestamp 8:¯7¯¯¯¯¯¯6¯7¯6¯¯¯¯¯¯7¯6¯¯¯¯5¯6¯5¯ ¯¯6¯5¯  6¯   5¯     6¯ ¯7¯¯6¯ 5¯  6¯¯5¯   ¯
alias _defect.listtext_var  $e($iif($window($active).stamp,12,3)) %::timestamp 8:3 $_defect_bold(4,3,$replace($1-,,03))
alias _defect.listsep_var   %:echo %::timestamp   6-7----6-5-  -6-7---6-7-6-
alias _defect.listend_var   %:echo %::timestamp 8:_7______6_7_6______7_6____5_6_5_ __6_5_  6_   5_     6_ _7__6_ 5_  6__5_   _

alias _defect.lusershead {
  %:echo %::timestamp %::pre 08 $+ %::server 6statistics2..
  %:echo %::timestamp     8users on  1:4 %::users 1(03 $+ %::text 2invisible1)
  %:echo %::timestamp     8servers    1:4 %::value
}
alias _defect.lusersfoot {
  %:echo %::timestamp     8max global1:4 %::users 3user $+ $iif(%::users > 1,s) $+ ,4 %::value 3server $+ $iif(%::value > 1,s)
  %:echo %::timestamp %::pre 6end8 %::server 6statistics2..
}

alias _defect.names {
  var %i = 1
  if ($gettok(%::text,1,32) == %::chan) %::text = $gettok(%::text,2-,32)
  if (!$window(@_defect.names)) window -hls @_defect.names
  while ($gettok(%::text,%i,32)) { aline -l @_defect.names $ifmatch | inc %i }
}
alias _defect.namesend {
  var %i = 1, %c = 1, %cs = .@%+, %s, %m, %n, %z = $iif($1 == var,_var)
  if (!$window(@_defect.names)) return
  _defect.listbegin $+ %z
  _defect.listtext $+ %z 7/3names list for8 %::chan
  _defect.listsep $+ %z
  while ($mid(%cs,%c,1)) {
    %s = $ifmatch $+ *
    %i = 1
    while ($fline(@_defect.names,%s,%i,1)) {
      %n = %n $line(@_defect.names,$ifmatch)
      if ($numtok(%n,32) == 4) {
        if ($1 == var) _defect.listtext $+ %z 03 $+ $@($gettok(%n,1,32)) $+ 1,3 $@($gettok(%n,2,32)) $+ 1,3 $@($gettok(%n,3,32)) $+ 1,3 $@($gettok(%n,4,32))
        else { _defect.listtext $+ %z 1[03 $+ $@($_defect_aline($gettok(%n,1,32))) $+ 1] [03 $+ $@($_defect_aline($gettok(%n,2,32))) $+ 1] [03 $+ $@($_defect_aline($gettok(%n,3,32))) $+ 1] [03 $+ $@($_defect_aline($gettok(%n,4,32))) $+ 1] }
        %n =
      }
      inc %i
    }
    .filter -cwwx @_defect.names @_defect.names %s
    inc %c
  }
  %i = 1
  while ($line(@_defect.names,%i)) {
    %n = %n $ifmatch
    if ($numtok(%n,32) == 4) {
      if ($1 == var) _defect.listtext $+ %z 03 $+ $@($gettok(%n,1,32)) $+ 1,3 $@($gettok(%n,2,32)) $+ 1,3 $@($gettok(%n,3,32)) $+ 1,3 $@($gettok(%n,4,32))
      else { _defect.listtext $+ %z 1[03 $+ $@($_defect_aline($gettok(%n,1,32))) $+ 1] [03 $+ $@($_defect_aline($gettok(%n,2,32))) $+ 1] [03 $+ $@($_defect_aline($gettok(%n,3,32))) $+ 1] [03 $+ $@($_defect_aline($gettok(%n,4,32))) $+ 1] }
      %n =
    }
    inc %i
  }
  if (%n) {
    %i = 1
    while ($gettok(%n,%i,32)) {
      if ($1 == var) %m = %m 03 $+ $@($gettok(%n,%i,32)) $+ $iif($gettok(%n,$calc(%i + 1),32),1 $+ $chr(44))
      else { %m = %m 1[03 $+ $@($_defect_aline($gettok(%n,%i,32))) $+ 1] }
      inc %i
    }
    _defect.listtext $+ %z %m
  }
  window -c @_defect.names
  _defect.listend $+ %z
}

alias _defect.parseraw {
  if ($istok(213 214 215 216 217 218 220 241 243 244 245 246 247 248 275,$1,32)) _defect_echo %::timestamp %::pre 1[04 $+ %::value $+ 1]3 %::text
  else _defect_echo %::timestamp %::pre 03 $+ %::text
}
