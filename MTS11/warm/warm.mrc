alias warm.start {
  color inactive $color(editbox)
  /echo 5-----------------------------------------------------
  /echo 4[7 Warm theme for MTS by McCrackin 4]
  /echo 5-----------------------------------------------------
}

alias warm.whoisstart {
  %:echo  $+ %::c4   [ $+ %::c2 /whois $+ %::c3 %::nick  $+ %::c4 $+ ] ————————————————————————————
  %:echo  $+ %::c4         : › $+ %::c2 Address  $+ %::c4 $+ : $+ %::c3 %::address
  %:echo  $+ %::c4         : › $+ %::c2 Name  $+ %::c4 $+ : $+ %::c3 %::realname
}

alias warm.whowasstart {
  %:echo  $+ %::c4   [ $+ %::c2 /whowas $+ %::c3 %::nick  $+ %::c4 $+ ] ————————————————————————————
  %:echo  $+ %::c4         : › $+ %::c2 Address  $+ %::c4 $+ : $+ %::c3 %::address
  %:echo  $+ %::c4         : › $+ %::c2 Name  $+ %::c4 $+ : $+ %::c3 %::realname
}

alias blue.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)

alias warm.lusersstart {
  %:echo  $+ %::c4     : › $+ %::c2  Invisible  $+ %::c4 $+ : $+ %::c3 %::text  $+ %::c4 $+ [ $+ %::c3 $calc($round(%::text / %::users,0)) $+ %  $+ %::c4 $+ ]
  %:echo  $+ %::c4     : › $+ %::c2  Servers  $+ %::c4 $+ : $+ %::c3 %::value $+ 
}
alias warm.raw.255 {
  %:echo  $+ %::c4     : › $+ %::c2  Clients  $+ %::c4 $+ : $+ %::c3 %::users $+ 
  %:echo  $+ %::c4     : › $+ %::c2  Servers  $+ %::c4 $+ : $+ %::c3 %::value $+ 
}
alias warm.lusersend {
  %:echo  $+ %::c4     : › $+ %::c2  Global users  $+ %::c4 $+ : $+ %::c3 %::users  $+ %::c4 $+ [ $+ %::c1 Max: $+ %::c3 %::value  $+ %::c4 $+ ]
  %:echo 
}

alias warm.topic {
  %:echo 4[7 TOPIC: %::text 4]
}
alias warm.endtopic {
  %:echo 4[7 Set by: %::nick 4] on %::text
}

alias warm.names {
  if (%::chan != %::bluetheme.names.chan) {
    %:echo   $+ %::c4   [ $+ %::c2 /names $+ %::c3 %::chan  $+ %::c4 $+ ] ———————————————————————
    %::bluetheme.names.chan = %::chan
  }
  var %x = 0
  %::text = $gettok(%::text,2-,32)
  while ($gettok(%::text,$+($calc(1 + %x),-,$calc(%x + 5)),32)) {
    var %names = $ifmatch, %y = 1, %names2
    while ($gettok(%names,%y,32)) {
      %names2 = $addtok(%names2,$+($ifmatch,$str($chr(160),2)),32)
      inc %y
    }
    %:echo  $+ %::c4         : › $+ %::c1 %names2
    inc %x 5
  }
}
alias warm.endnames {
  %:echo  $+ %::c4   [ $+ %::c3 End  $+ %::c4 $+ ] ————————————————————
  if (-s isin %:echo) %:echo -
  unset %::bluetheme.names.*
}

alias warm.raw.004 {
  %:echo %::pre 12Usermodes: $+ %::c3 $gettok(%::text,3,32) $+ 
  %:echo %::pre 12Chanmodes: $+ %::c3 $gettok(%::text,4,32) $+ 
}
