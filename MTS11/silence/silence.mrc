alias silence.whois {
  %:echo 0___________________________________________________________
  %:echo 3 Whois on %::nick
  %:echo 0¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo » 3Name:0 %::realname
  %:echo » 3Address:0 %::address
}
alias silence.wchans %:echo » 3Chans:0 %::chan 3( $+ $comchan(%::nick,0) 0common3)
alias silence.widle {
  %:echo » 3Idle:0 $duration(%::idletime)
  %:echo » 3Signed on:0 %::signontime
}

alias silence.lusers {
  %:echo 0___________________________________________________________
  %:echo 3 Lusers
  %:echo 0¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo %::pre 3Invisible:0 %::users
  %:echo %::pre 3Servers:0 %::value
}

alias silence.lusersend {
  %:echo %::pre 3Clients:0 %::users 3Servers:0 %::value
  %:echo 0¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
}
