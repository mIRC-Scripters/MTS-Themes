alias anac.raw {
  if ($1 == 375) {
    %:echo  $+ $color(background) $+ .
    %:echo [MOTD] -  $+ %::c2 $+ ( $+ %::server $+  $+ %::c2 $+ )
  }
  elseif ($1 == 376) {
    %:echo [/MOTD]
    %:echo  $+ $color(background) $+ .
  }
  elseif ($1 == 251) {
    %:echo  $+ $color(background) $+ .
    %:echo [Lusers] -  $+ %::c2 $+ ( $+ %::server $+  $+ %::c2 $+ )
    %:echo  - Users: %::users user(s)  $+ %::c2 $+ (I $+ %::text invisible $+  $+ %::c2 $+ ) on %::value server(s)
  }
  elseif ($1 == 266) {
    %:echo  - Global Users: %::users  $+ %::c2 $+ (max: %::value $+  $+ %::c2 $+ )
    %:echo [/Lusers]
    %:echo  $+ $color(background) $+ .
  }
  elseif ($1 == 311) {
    %:echo [Whois] -  $+ %::c2 $+ ( $+ %::nick $+  $+ %::c2 $+ )
    %:echo  $+ %::c2 › Realname: %::realname  $+ %::c2 ( $+ %::address $+  $+ %::c2 $+ ) $iif(%::country,· $v1)
  }
  elseif ($1 == 314) {
    %:echo [Whowas] -  $+ %::c2 $+ ( $+ %::nick $+  $+ %::c2 $+ )
    %:echo  $+ %::c2 › Realname: %::realname  $+ %::c2 ( $+ %::address $+  $+ %::c2 $+ )
  }
  elseif ($1 == 319) {
    %:echo  $+ %::c2 › Channels: $replace(%::chan,$chr(32),$chr(44) $+ $chr(32))
    if ($comchan(%::nick,0) > 0) {
      var %i = 1
      while ($comchan(%::nick,%i)) {
        var %t = $addtok(%t,$comchan(%::nick,%i),44)
        inc %i
      }
      %:echo  $+ %::c2 › Common Channels: $replace(%t,$chr(44),$chr(44) $+ $chr(32))
    }
  }
}

alias anac.dur return $replace($duration($1),wks,w,days,d,hrs,h,mins,m,secs,s,wk,w,day,d,hr,h,min,m,sec,s)

alias anac.time return $asctime($1,dd/mm/yyyy @ HH:nn)

alias anac.err return  $+ %::c2 $+ (Error $+ %::c2 $+ ):
