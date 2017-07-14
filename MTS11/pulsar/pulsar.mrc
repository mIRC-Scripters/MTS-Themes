alias pulsar.start {
  color inactive 1
  %:echo 
  %:echo  5• Pulsar theme (4Brain and Mortifero) (brain@iol.pt4) for mTS
  %:echo 
}
alias pulsar.whoisstart {
  if ($1) %:echo $str($chr(160),2)  5• /Whois 4: %::nick 14 $+ $str(—,25)
  else %:echo $str($chr(160),2)  5• /Whois: %::nick 14 $+ $str(—,25)
  %:echo $str($chr(160),7)  14›15› 4Address: 14(15 $+ %::address $+ 14) 
  %:echo $str($chr(160),7)  14›15› 4Name: %::realname
}

alias pulsar.whowasstart {
  if ($1) %:echo $str($chr(160),2)  5• /Whowas 4: %::nick 14 $+ $str(—,25)
  else %:echo $str($chr(160),2)  5• /Whowas: %::nick 14 $+ $str(—,25)
  %:echo $str($chr(160),7)  14›15› 4Address: 14(15 $+ %::address $+ 14) 
  %:echo $str($chr(160),7)  14›15› 4Name: %::realname
}

alias pulsar.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)
alias pulsar.topic {
  %:echo 14————————————————————————————————————————————
  if ($1) %:echo  5• Topic 04: %::text
  else %:echo  5• Topic: %::text
}
alias pulsar.endtopic {
  if ($1) %:echo  5• By 04: %::nick on04 %::text
  else %:echo  5• By:04 %::nick on04 %::text
  %:echo 14—————————————————————————————————
}

alias pulsar.names {
  if (%::chan != %::pulsartheme.names.chan) {
    if ($1) %:echo $str($chr(160),2)  5• /Names 4: %::chan 14 $+ $str(—,25)
    else %:echo $str($chr(160),2)  5• /Names: %::chan 14 $+ $str(—,25)
    %::pulsartheme.names.chan = %::chan
  }
  var %x = 0
  %::text = $gettok(%::text,2-,32)
  while ($gettok(%::text,$+($calc(1 + %x),-,$calc(%x + 4)),32)) {
    var %names = $ifmatch, %y = 1, %names2
    while ($gettok(%names,%y,32)) {
      %names2 = $addtok(%names2,   $ifmatch,32)
      inc %y
    }
    %:echo         %names2
    inc %x 4
  }
}
alias pulsar.endnames {
  %:echo     5• End of /Names info 14————————————————
  if (-s isin %:echo) %:echo -
  unset %::pulsartheme.names.*
}

alias pulsar.lusersstart {
  if ($1) %:echo $str($chr(160),2)  5• /Lusers 4: %::server
  else %:echo $str($chr(160),2)  5• /Lusers: %::server
  %:echo $str($chr(160),7)  14›15› 4Invisible: %::text
  %:echo $str($chr(160),7)  14›15› 4Servers: %::value
}
alias pulsar.lusersend {
  %:echo $str($chr(160),7)  14›15› 4Global:  %::users · 4max: %::value 14[15 $+ $round($calc($calc(%::users / %::value) * 100),1) $+ % $+ 14 $+ ]]
}
; EOF
