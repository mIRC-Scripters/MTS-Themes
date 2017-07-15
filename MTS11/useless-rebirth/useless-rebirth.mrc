alias start.whois {
  %:echo $+(,%::c4)
  %:echo %::pre $+ $+(,%::c4) name: $+ $+(,%::c3) %::realname
  %:echo %::pre $+ $+(,%::c4) address: $+ $+(,%::c3) %::address
  if (%::operline) { %:echo %::pre $+ $+(,%::c4) irc operator: $+ $+(,%::c3) yes }
  if (%::chan) %:echo %::pre $+ $+(,%::c4) chans: $+ $+(,%::c3) %::chan
  if (%::wserver) { %:echo %::pre $+ $+(,%::c4) server: $+ $+(,%::c3) %::wserver ( $+ %::serverinfo $+ ) }
  if (%::away) { %:echo %::pre $+ $+(,%::c4) away: $+ $+(,%::c3) %::away }
  if (quakenet isin $server) && (%::rebirth.auth) { %:echo %::pre $+ $+(,%::c4) authed as: $+ $+(,%::c3) $ifmatch  }
  if (%::idletime) { 
    %:echo %::pre $+ $+(,%::c4) idle: $+ $+(,%::c3) $duration(%::idletime) 
  %:echo %::pre $+ $+(,%::c4) signed on: $+ $+(,%::c3) %::signontime }
  unset %::rebirth.auth
}

alias start.whowas {
%:echo 
%:echo %::pre $+ $+(,%::c4) %::nick was: $+ $+(,%::c3) %::realname ( $+ %::address $+ )
if (%::wserver) { %:echo %::pre $+ $+(,%::c4) server was: $+ $+(,%::c3) %::wserver }
if (%::serverinfo) { %:echo %::pre $+ $+(,%::c4) quit on: $+ $+(,%::c3) $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss) }
}
