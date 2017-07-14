alias blue.start {
  color inactive $color(editbox)
  %:echo 
  %:echo %::pre  $+ %::c1 $+ Blue for mTS  $+ %::c1 $+ by  $+ %::c4 $+ [11 Tig0ti  $+ %::c4 $+ ] : [ $+ %::c3 $+  tig0ti@fractalscript.com  $+ %::c4 $+ ].  $+ %::c1 $+ Original theme by  $+ %::c4 $+ [11 Prisoner  $+ %::c4 $+ ] : [  $+ %::c3 $+ prisoner@vizzavi.pt  $+ %::c4 $+ ]
  %:echo 
}

alias blue.whoisstart {
  %:echo  $+ %::c4   [11 /whois $+ %::c3 %::nick  $+ %::c4 $+ ] ————————————————————————————
  %:echo  $+ %::c4         : ›11 Address  $+ %::c4 $+ : $+ %::c3 %::address
  %:echo  $+ %::c4         : ›11 Name  $+ %::c4 $+ : $+ %::c3 %::realname
}

alias blue.whowasstart {
  %:echo  $+ %::c4   [11 /whowas $+ %::c3 %::nick  $+ %::c4 $+ ] ————————————————————————————
  %:echo  $+ %::c4         : ›11 Address  $+ %::c4 $+ : $+ %::c3 %::address
  %:echo  $+ %::c4         : ›11 Name  $+ %::c4 $+ : $+ %::c3 %::realname
}

alias blue.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)

alias blue.lusersstart {
  %:echo 
  ;  %:echo  $+ %::c4        %::pre 11 /lusers $+ %::c3 %::server
  %:echo  $+ %::c4     : ›11  Invisible  $+ %::c4 $+ : $+ %::c3 %::text  $+ %::c4 $+ [ $+ %::c3 $calc($round(%::text / %::users,0)) $+ %  $+ %::c4 $+ ]
  %:echo  $+ %::c4     : ›11  Servers  $+ %::c4 $+ : $+ %::c3 %::value $+ 
}
alias blue.raw.255 {
  %:echo  $+ %::c4     : ›11  Clients  $+ %::c4 $+ : $+ %::c3 %::users $+ 
  %:echo  $+ %::c4     : ›11  Servers  $+ %::c4 $+ : $+ %::c3 %::value $+ 
}
alias blue.lusersend {
  %:echo  $+ %::c4     : ›11  Global users  $+ %::c4 $+ : $+ %::c3 %::users  $+ %::c4 $+ [08 Max: $+ %::c3 %::value  $+ %::c4 $+ ]
  %:echo 
}

alias blue.topic {
  %:echo  $+ %::c4 ——————————————————————————————————————————
  %:echo  %::pre 11Topic  $+ %::c4 $+ : $+ $iif( !isin %::text,%::c1) %::text
}
alias blue.endtopic {
  %:echo %::pre 11Set by  $+ %::c4 $+ : $+ %::c3 %::nick 11on $+ %::c3 %::text
  %:echo  $+ %::c4 ———————————————————————————————————
}

alias blue.names {
  if (%::chan != %::bluetheme.names.chan) {
    %:echo   $+ %::c4   [11/names $+ %::c3 %::chan  $+ %::c4 $+ ] ———————————————————————
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
alias blue.endnames {
  %:echo  $+ %::c4   [ $+ %::c3 End  $+ %::c4 $+ ] ————————————————————
  if (-s isin %:echo) %:echo -
  unset %::bluetheme.names.*
}

alias bluetheme $iif($query($active) || $chan($active) || $chat($active),me using 12MTS/bluetheme.)
alias blue.raw.004 {
  %:echo %::pre 09Usermodes $+ %::c4 : $+ %::c1 $gettok(%::text,3,32) $+ 
  %:echo %::pre 09Chanmodes $+ %::c4 : $+ %::c1 $gettok(%::text,4,32) $+    
}
