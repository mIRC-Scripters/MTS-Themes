alias plain.whois {
  %:echo ___________________________________________________________
  %:echo  Whois on %::nick
  %:echo ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo » Name: %::realname
  %:echo » Address: %::address
}
alias plain.wchans %:echo » Chans: %::chan ( $+ $comchan(%::nick,0) common)
alias plain.widle {
  %:echo » Idle: $duration(%::idletime)
  %:echo » Signed on: %::signontime $+ 
}

alias plain.lusers {
  %:echo ___________________________________________________________
  %:echo  Lusers
  %:echo ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo %::pre Invisible: %::users
  %:echo %::pre Servers: %::value
}

alias plain.lusersend {
  %:echo %::pre Clients: %::users Servers: %::value
  %:echo ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
}
