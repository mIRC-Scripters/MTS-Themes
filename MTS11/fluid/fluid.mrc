alias fluid.whois {
  %:echo 00---15----00---3(15/Whois %::nick $+ 03)00---15----00---
  %:echo 0-03Name:00 %::realname
  %:echo 0-03Address:00 %::address
}
alias fluid.wchans %:echo 0-03Chans:00 %::chan 3(00 $+ $comchan(%::nick,0) 15common3)
alias fluid.widle {
  %:echo 0-3Idle:00 $duration(%::idletime)
  %:echo 0-3Signed on:00 %::signontime $+ 
}

alias fluid.lusers {
  %:echo 00---15----00---3(15Lusers3)00---15----00---
  %:echo %::pre 15Invisible:03 %::users
  %:echo %::pre 15Servers:03 %::value
}
alias fluid.bmotd %:echo %::pre 15MOTD
alias fluid.emotd %:echo %::pre 15End of MOTD
