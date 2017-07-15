alias viren.start {
  %:echo 
  %:echo %::pre 12viren $+ %::c1 for  $+ %::c2 $+ mTS
  %:echo %::pre made by $+ %::c3 Prisoner $+ %::c4 ( $+ %::c1 $+ prisoner $+ %::c4 $+ @ $+ %::c1 $+ vizzavi.pt $+ %::c4 $+ )
  %:echo %::pre  $+ %::c2 $+ theme $+ %::c1 based (not equal) on  $+ %::c2 $+ Negligence's $+ %::c4 ( $+ %::c1 $+ by  $+ %::c2 $+ Vanguard $+ %::c4 $+ ) $+ %::c1 theme $+ %::c3 blue-4
  %:echo 
}

alias viren.whoisstart {
  %:echo 
  %:echo  $+ %::c4 ---12 %::nick  $+ %::c4 $+ -------------------------------------------------------
  %:echo  $+ %::c4 . $+ %::c2 Name: $+ %::c1 %::realname $+  $+ %::c1 %:comments
}
alias viren.whoisend {
  %:echo  $+ %::c4 ---------------------------------------------------
  %:echo 
}

alias viren.lusersstart {
  %:echo 
  %:echo  $+ %::c4 . $+ %::c2 Lusers12 %::server
  %:echo  $+ %::c4 ----------------------------------------------
  %:echo  $+ %::c4 . $+ %::c1 Invisible: $+ %::c2 %::text $+  $+ %::c1 %:comments
  %:echo  $+ %::c4 . $+ %::c1 Servers: $+ %::c2 %::value $+  $+ %::c1
}
alias viren.raw.255 {
  %:echo  $+ %::c4 . $+ %::c1 Clients: $+ %::c2 %::users $+  $+ %::c1 %:comments
  %:echo  $+ %::c4 . $+ %::c1 Servers: $+ %::c2 %::value $+  $+ %::c1
}
alias viren.lusersend {
  %:echo  $+ %::c4 . $+ %::c1 Global users: $+ %::c2 %::users $+  $+ %::c4 . $+ %::c1 max: $+ %::c2 %::value  $+ %::c4 $+ ( $+ %::c3 $+ $round($calc(%::users  / %::value * 100),0) $+ % $+  $+ %::c4 $+ ) $+ %::c1 %:comments
  %:echo  $+ %::c4 ----------------------------------------------
  %:echo 
}

alias viren.topic {
  %:echo  $+ %::c4 --------------------------------------------------------------------------------------------------
  %:echo %::pre  $+ %::c2 $+ Topic: $+ %::c1 %::text
}
alias viren.endtopic {
  %:echo %::pre  $+ %::c2 $+ Set by:12 %::nick  $+ %::c2 $+ on $+ %::c1 %::text $+  $+ %::c1 %:comments
  %:echo  $+ %::c4 ------------------------------------------------------------------------
}

alias viren.names {
  if (%::chan != %::virentheme.names.chan) {
    %:echo  $+ %::c4 ---12 %::chan  $+ %::c4 $+ ------------------------------------------------------------
    %::virentheme.names.chan = %::chan
  }
  var %x = 0
  %::text = $gettok(%::text,2-,32)
  while ($gettok(%::text,$+($calc(1 + %x),-,$calc(%x + 5)),32)) {
    var %names = $ifmatch, %y = 1, %names2
    while ($gettok(%names,%y,32)) {
      %names2 = $addtok(%names2,$+($ifmatch,$str($chr(160),2)),32)
      inc %y
    }
    %:echo  $+ %::c4 . $+ %::c1 %names2
    inc %x 5
  }
}
alias viren.endnames {
  %:echo  $+ %::c4 --------------------------------------------------------
  if (-s isin %:echo) %:echo -
  unset %::virentheme.names.*
}

alias viren.raw.004 {
  var %a = 4 - $numtok(%::text,32)
  %:echo %::pre Usermodes available are $+ %::c3 $gettok(%::text,$calc(3 - %a),32) $+  $+ %::c1 %:comments
  %:echo %::pre Chanmodes available are $+ %::c3 $gettok(%::text,$calc(4 - %a),32) $+  $+ %::c1 %:comments   
}

alias viren.colorcmode {
  var %f = $pos($1,$chr(35),1)
  if (!%f) %f = 1
  return  $+ %::c3 $+ $left($1,$calc(%f - 1)) $+  $+ %::c1 $+ $mid($1,%f,$calc($len($1) - %f + 1))
}

alias viren.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)
