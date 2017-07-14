;  WHOIS  ;
alias orange.whois {
  %:echo 14==7[0 Whois on 7:15 %::nick 7]14=======================================================
  %:echo 0         ¤ 7[0RealName 7:15 %::realname 7] 0¤ 7[0 %::address  7]
  %:echo 0         ¤ 7[0Channels 7:15 %::chan 7]
  %:echo 0         ¤ 7[0Server 7:15 %::wserver 7] 0¤ 7[0 %::serverinfo 7]
  %:echo 0 $str($chr(160),7) ¤ 7[0Idle 7:15 $duration(%::idletime) 7] 0¤ 7[0Sign on 7:15 $asctime($ctime(%::signontime),HH:nn:ss -  dd/mm/yyyy dddd) 7] 

}

;  NAMES  ;
alias MaG.names {
  if (%::chan != %::bluetheme.names.chan) {
    %:echo  1-
    %:echo  14=7[0 Names 7:15 %::chan 7]14=============================================
    %::bluetheme.names.chan = %::chan
  }
  var %x = 0
  %::text = $gettok(%::text,2-,32)
  while ($gettok(%::text,$+($calc(1 + %x),-,$calc(%x + 5)),32)) {
    var %names = $ifmatch, %y = 1, %names2
    while ($gettok(%names,%y,32)) {
      %names2 = $addtok(%names2,$+($ifmatch,$str($chr(160),1)),32)
      inc %y
    }
    %:echo 0        0 %names2
    inc %x 5
  }
}
alias MaG.endnames {
  %:echo 14=7[0End7]14===========================================
  if (-s isin %:echo) %:echo 1-
  unset %::bluetheme.names.*
}

;  L-USERS  ;
alias ustart.start {
  %:echo 0
  %:echo 14 ==7[0 lusers %::wserver 7]14===================================
  %:echo 0         ¤ 7[0Invisible 7:15 %::text 7]0 ¤ 7[0 $round($calc($calc(%::text / %::users) * 100),1) $+ % 7]
  %:echo 0         ¤ 7[0Servers 7:15 %::value 7]
}
alias uend.end {
  %:echo 0         ¤ 7[0Global users 7:15 N/A 7]0 ¤ 7[0Max 7:15 N/A 7]
  %:echo 14 ==7[0 End 7]14===================================
  %:echo 0
}


;  TOPIC & STUFF  ;
alias default.created {
  %:echo 0       ¤ 7[0Created 7:15 $3- 7]

  %:echo 0       ¤ 7[0Total users15 7:15 $nick($1,0) 7] 0¤7 [0Ops15 7:15 $nick($1,0,o,rvh) 7] 0¤7 [0Voice15 7:15  $nick($1,0,v,roh) 7] 0¤7 [0Regular15 7:15 $nick($1,0,r,ovh) 7]  
  %:echo  $+ $2 $+ 14======7[0 End 7 ]14================================
}
alias default.topicis {

  %:echo 0       ¤ 7[0Topic 7] 0¤ 7[0 $3- 7]
}

alias default.topicset {
  %:echo 0       ¤ 7[0Topic Author 7] 0¤ 7[0 $3 7] 0¤ 7[0 $4- 7]
}
alias default.modes echo $colour(Topic) -t $1  $+ $2 $+  0       ¤ 7[0Modes 7:15 $3- 7]
}
