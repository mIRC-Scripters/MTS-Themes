alias diva.whoisstart {
  %:echo __________( /whois2 %::nick )__________ _ __ ____   _ _        _    __  _
  %:echo Address:2 %::address
  %:echo Name:2 %::realname
}

alias diva.whowasstart {
  %:echo __________( /whowas2 %::nick )__________ _ __ ____   _ _        _    __  _
  %:echo Address:2 %::address
  %:echo Name:2 %::realname
}
alias diva.luserstart {
  %:echo %::pre Invisible:2 %::text 
  %:echo %::pre Servers:2 %::value
}
alias diva.raw.255 {
  %:echo %::pre Clients:2 %::users
  %:echo %::pre Servers:2 %::value
}
