alias neptune.about {
  %:echo $neptune.gfx(1) Name:13 neptune v3.0
  %:echo $neptune.gfx(2,1) Author:12 scratcher
  %:echo $neptune.gfx(2,1) E-Mail:12 scratcher@netcabo.pt
  %:echo $neptune.gfx(2,1) Description:12 getting to the point... the right one...
}
alias neptune.gfx {
  var %x
  if ($1 == 1) { %x = $chr(149) }
  elseif ($1 == 2) { %x = $+(,$chr(149),) }
  elseif ($1 == 3) { %x = $chr(183) }
  elseif ($1 == 4) { %x = $+(,$chr(164),) }
  else { return $+(11,$str($chr(151),$2)) }
  return $iif($2,$str($chr(160),$2)) %::pre 11(13 %x 11)
}
alias neptune.country {
  if (%::country) { return 11(13 $ifmatch 11) }
}
alias neptune.notify {
  if (%::nick isnotify) { return 11( Notify User 11) }
}
alias neptune.duration {
  return $remove($duration($1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)
}
alias neptune.raw {
  if (%::numeric == 004) {
    %:echo %::pre User Modes:13 $gettok(%::text,2,32)
    %:echo %::pre Channel Modes:13 $gettok(%::text,3,32)
  }
  elseif (%::numeric == 255) {
    %:echo $neptune.gfx(3,4) Clients:13 %::users
    %:echo $neptune.gfx(3,4) Servers:13 %::value
  }
  elseif (%::numeric == 266) {
    %:echo $neptune.gfx(3,4) Global Users:13 %::users $+  $chr(183) Maximum:13  %::value 11(13 $int($calc(%::users / %::value * 100)) $+ % 11)
    %:echo $neptune.gfx(2,1) /Lusers11 $neptune.gfx(5,24)
  }
  elseif (%::numeric == 311) {
    %:echo $neptune.gfx(2,1) /Whois 11(13 %::nick 11) $neptune.gfx(5,28)
    %:echo $neptune.gfx(3,4) Address:13 %::address $neptune.country
    %:echo $neptune.gfx(3,4) Name:13 %::realname
  }
  elseif (%::numeric == 314) {
    %:echo $neptune.gfx(2,1) /Whowas 11(13 %::nick 11) $neptune.gfx(5,28)
    %:echo $neptune.gfx(3,4) Address:13 %::address $neptune.country
    %:echo $neptune.gfx(3,4) Name:13 %::realname
  }
  elseif (%::numeric == 332) {
    %:echo $neptune.gfx(5,44)
    %:echo %::pre Topic: %::text
  }
  elseif (%::numeric == 333) {
    %:echo %::pre Set by:13 %::nick $+  $chr(183) Set on:13 %::text
    %:echo $neptune.gfx(5,40)
  }
  elseif (%::numeric == 353) {
    %:echo $neptune.gfx(2,1) /Names 11(13 %::chan 11) $neptune.gfx(5,28)
    var %n,%x = 2
    while ($gettok(%::text,%x,32)) {
      %n = $addtok(%n,$+($ifmatch,$str($chr(160),5)),32)
      if ($numtok(%n,32) == 5) { %:echo $neptune.gfx(3,4) $+ 13 %n | unset %n }
      inc %x
    }
    if (%n) { %:echo $neptune.gfx(3,4) $+ 13 %n }
  }
}
