alias e.load {
  var %x = $colour(background)
  %:echo  $+ %x $+ |
  %:echo  $+ %::c3 $+ ¦ $+ %x $+ ———————-—--—---------—|
  %:echo  $+ %::c1 $+ | $+ %x $+ ———————-—--—---------— $+ %::c3 $+ ¦
  %:echo  $+ %::c1 $+ | $+ %::c1 $+ ——————— $+ %::c3 $+ - $+ %::c1 $+ — $+ %::c3 $+  -- $+ %::c1 $+ — $+ %x $+ - $+ %::c3 $+ -- $+ %x $+ -- $+ %::c3 $+ -- $+ %x $+ - $+ %::c3 $+ - $+ %x $+ — $+ %::c1 $+ |
  %:echo  $+ %::c1 $+ | Edg $+ %::c3 $+ e $+ %::c1 [v $+ %::c2 $+ 4 $+ %::c1 $+ a] by angel_0f_life $+ %x _ $+ %::c1 $+ |
  %:echo  $+ %::c1 $+ | $+ %x $+ — $+ %::c3 $+ - $+ %x $+ - $+ %::c3 $+ -- $+ %x $+ -- $+ %::c3 $+ -- $+ %x $+ - $+ %::c1 $+ — $+ %::c3 $+ -- $+ %::c1 $+ — $+ %::c3 $+ - $+ %::c1 $+ ———————|
  %:echo  $+ %::c3 $+ ¦ $+ %x $+ ———————-—--—---------— $+ %::c1 $+ |
  %:echo  $+ %x $+ |———————-—--—---------— $+ %::c3 $+ ¦
  %:echo  $+ %x -
  %:echo  $+ %::c2 $+ To access the timestamp options, type /edgemts
}

alias e.whois {
  var %x = $colour(background)
  %:echo  $+ %::c1 $+ ———————————————————————————  $+ %x $+ - $+ %::c2 $+ — ———  $+ %x $+ - $+ %::c3 $+ —— —  $+ %x $+ —— $+  $+ %::c3 $+ —
  %:echo %::pre $+  $+ %::c1 %::nick
  %:echo  $+ %::c1 $+ ———————————————————  $+ %x $+ - $+ %::c2 $+ — ———  $+ %x $+ - $+ %::c3 $+ —— —  $+ %x $+ —— $+ %::c3 $+ —
  %:echo %::pre  $+ %::c1 $+ Name $+ %::c2 $+ : %::realname
  %:echo %::pre  $+ %::c1 $+ Address $+ %::c2 $+ : $replace(%::address,@, $+ %::c1 $+ @ $+ %::c2)
}
alias e.chans %:echo %::pre  $+ %::c1 $+ Channels $+ %::c2 $+ : $replace(%::chan,+, $+ %::c1 $+ + $+ %::c2,@, $+ %::c1 $+ @ $+ %::c2,%, $+ %::c1 $+ % $+  $+ %::c2 $+ )  $+ %::c1 $+ ( $+ %::c2 $+ $comchan(%::nick,0)  $+ %::c1 $+ common)
alias e.idle {
  %:echo %::pre  $+ %::c1 $+ Idle $+ %::c2 $+ : $duration(%::idletime)
  %:echo %::pre  $+ %::c1 $+ Signed on $+ %::c2  $+ : %::signontime
}

alias e.join {
  var %x = $colour(background)
  %:echo  $+ %::c1 $+ ———————————————————————————  $+ %x $+ - $+ %::c2 $+ — ———  $+ %x $+ - $+ %::c3 $+ —— —  $+ %x $+ —— $+ %::c3 $+ —
  %:echo %::pre  $+ %::c2 $+ Now talking on $+ %::c1 %::chan
}
alias e.topic {
  %:echo %::pre  $+ %::c1 $+ Topic $+ %::c2 $+ : %::text
}

alias e.settopic {
  var %x = $colour(background)
  %:echo %::pre  $+ %::c1 $+ Set by $+ %::c2 $+ : %::nick  $+ %::c1 $+ on $+ %::c2 $+ : %::text
  %:echo  $+ %::c1 $+ —————————————————————————————————  $+ %x $+ - $+ %::c1 $+ — ———  $+ %x $+ - $+ %::c2 $+ —— —  $+ %x $+ —— $+ %::c3 $+ —— ———  $+ %x $+ -- $+ %::c3 $+ —

}
alias e.whois.end {
  var %x = $colour(background)
  %:echo  $+ %::c1 $+ ———————————————————————————————  $+ %x $+ - $+ %::c2 $+ — ———  $+ %x $+ - $+ %::c3 $+ —— —  $+ %x $+ —— $+ %::c3 $+ —
}

alias e.lusers {
  var %x = $colour(background)
  %:echo  $+ %::c1 $+ ———————————————————————————  $+ %x $+ - $+ %::c2 $+ — ———  $+ %x $+ - $+ %::c3 $+ —— —  $+ %x $+ —— $+ %::c3 $+ —
  %:echo %::pre  $+ %::c2 $+ Users $+ %::c1 $+ : %::users  $+ %::c2 $+ Invisible $+ %::c1 $+ : %::text  $+ %::c2 $+ Servers $+ %::c1 $+ : %::value 
}

alias e.lusers.end {
  var %x = $colour(background)
  %:echo %::pre  $+ %::c2 $+ Global users $+ %::c1 $+ : %::users  $+ %::c2 $+ Max $+ %::c1 $+ : %::value 
  %:echo  $+ %::c1 $+ ———————————————————————————————  $+ %x $+ - $+ %::c2 $+ — ———  $+ %x $+ - $+ %::c3 $+ —— —  $+ %x $+ —— $+ %::c3 $+ —
}

alias edge.whois.b {
  var %x = $len(%::nick)
  %:echo  $+ %::c1 $+ ÚÄ $+ $str(Ä,%x) $+ Ä¿
  %:echo  $+ %::c1 $+ ³  $+ %::c2 $+ %::nick $+  $+ %::c1 ³
  %:echo  $+ %::c1 $+ ÃÄ $+ $str(Ä,%x) $+ ÄÁÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
  %:echo  $+ %::c1 $+ ³ Name: $+ %::c2 %::realname
  %:echo  $+ %::c1 $+ ³ Address: $+ %::c2 $replace(%::address,@, $+ %::c1 $+ @ $+ %::c2)
}

alias edge.chans.b %:echo  $+ %::c1 $+ ³ Chans: $+ %::c2 %::chan  $+ %::c1 $+ ( $+ %::c2 $+  $+ $comchan(%::nick,0) common $+ %::c1 $+ )

alias edge.idle.b {
  %:echo  $+ %::c1 $+ ³ Idle: $+ %::c2 $duration(%::idletime)
  %:echo  $+ %::c1 $+ ³ Signed on: $+ %::c2 %::signontime
}

alias edge.whois2.b {
  var %x = $len(%::nick)
  %:echo  $+ %::c1 $+ ÀÄ $+ $str(Ä,%x) $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
}

alias edge.join.b {
  var %x = $len(%::chan)
  %:echo  $+ %::c1 $+ ÚÄ $+ $str(Ä,%x) $+ Ä¿
  %:echo  $+ %::c1 $+ ³  $+ %::c2 $+ %::chan $+  $+ %::c1 ³
  %:echo  $+ %::c1 $+ ÃÄ $+ $str(Ä,%x) $+ ÄÁÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
}

alias edge.topic.b {
  %:echo  $+ %::c1 $+ ³ Topic: $+ %::c2 %::text
}

alias edge.settopic.b {
  var %x = $len(%::chan)
  %:echo  $+ %::c1 $+ ³ Set by: $+ %::c2  $+ %::nick $+  $+ %::c1 on $+ %::c2 %::text
  %:echo  $+ %::c1 $+ ÀÄ $+ $str(Ä,%x) $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
}

alias edgemts dialog -m edgemts edgemts

dialog edgemts {
  title "Edge 4.1beta - TimeStamp Customization"
  size -1 -1 137 94
  option dbu
  box "TimeStamp Types:", 1, 1 0 135 68
  button "Change", 2, 98 80 37 12
  button "Cancel", 3, 59 80 37 12, cancel
  radio "(HH:nn)", 4, 5 10 30 10
  radio "(h:nnt)", 5, 5 19 30 10
  radio "HH:nn|", 6, 5 28 30 10
  radio "h:nnt|", 7, 5 37 30 10
  radio "(h:nntt)", 8, 5 46 30 10
  radio "h:nntt|", 9, 5 55 30 10
  radio "(<b>HH:nn<b>)", 10, 82 10 50 10, left
  radio "(<b>h:nnt<b>)", 11, 82 19 50 10, left
  radio "<b>HH:nn<b>|", 12, 82 28 50 10, left
  radio "<b>h:nnt<b>|", 13, 82 37 50 10, left
  radio "(<b>h:nntt<b>)", 14, 82 46 50 10, left
  radio "<b>h:nntt<b>|", 15, 82 55 50 10, left
  radio "<none>",16, 1 80 36 12, push
  text "<b> = bold tags", 17, 98 70 42 8
}

on *:dialog:edgemts:sclick:2: {
  var %x = $read($+(",$scriptdir,edge.mts,"),s,TimeStampFormat)
  var %y = $read($+(",$scriptdir,edge.mts,"),s,TimeStamp)
  var %a = 4
  while (%a <= 16) {
    if ($did(%a).state == 1) { var %b = $did(%a).text | break }
    inc %a
  }
  var %z = 1
  while (%z <= $lines($+(",$scriptdir,edge.mts,"))) {
    if ($gettok($read($+(",$scriptdir,edge.mts,"),%z),2-,32) = %x) { break }
    inc %z
  }
  var %w = 1
  while (%w <= $lines($+(",$scriptdir,edge.mts,"))) {
    if ($gettok($read($+(",$scriptdir,edge.mts,"),%w),2-,32) = %y) { break }
    inc %w
  }
  if (%b == <none>) { goto awee }
  /write -l $+ %z $+(",$scriptdir,edge.mts,") TimeStampFormat $replace(%b , $chr(40) , $+($chr(3),<c1>,$chr(40)) , $chr(41) , $+($chr(3),<c1>,$chr(41)) , h:nnt , $+($chr(3),<c2>,h:nnt) , h:nntt , $+($chr(3),<c2>,h:nntt) , HH:nn , $+($chr(3),<c2>,HH:nn) , <b> , $chr(2) , $chr(124) , $+($chr(3),<c1>,$chr(124)))
  /write -l $+ %w $+(",$scriptdir,edge.mts,") TimeStamp On
  //echo -s  $+ $colour(info) $+ Edge: TimeStamp enabled, format: $replace(%b,<b>,$chr(2))
  goto end
  :awee
  /write -l $+ %w $+(",$scriptdir,edge.mts,") TimeStamp Off
  //echo -s  $+ $colour(info) $+ Edge: TimeStamp disabled
  :end
  dialog -x $dname $dname
}
