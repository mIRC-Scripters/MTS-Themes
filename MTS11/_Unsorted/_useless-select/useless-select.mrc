alias start.select.whois {
  %:echo $+(,%::c3)
  %:echo   . $+ $+(,%::c3) $+ name: $+ $+(,%::c2) %::realname ( $+ %::address $+ )
  if (%::operline) { %:echo   . $+ $+(,%::c3) $+ irc operator: $+ $+(,%::c2) yes }
  if (%::chan) %:echo   . $+ $+(,%::c3) $+ chans: $+ $+(,%::c2) %::chan
  if (%::wserver) { %:echo   . $+ $+(,%::c3) $+ server: $+ $+(,%::c2) %::wserver ( $+ %::serverinfo $+ ) }
  if (%::away) { %:echo   . $+ $+(,%::c3) $+ away: $+ $+(,%::c2) %::away }
  if (quakenet isin $server) && (%::select.auth) { %:echo   . $+ $+(,%::c3) $+ authed as: $+ $+(,%::c2) $ifmatch  }
  if (%::idletime) { %:echo   . $+ $+(,%::c3) $+ idle: $+ $+(,%::c2) $duration(%::idletime) $+ $+(,%::c3) signed on: $+ $+(,%::c2) %::signontime  }
  %:echo $+(,%::c3)
  unset %::select.auth
}
alias start.select.whowas {
  %:echo $+(,%::c3)
  %:echo $+(,%::c3) %::nick was: $+ $+(,%::c2) %::realname ( $+ %::address $+ )
  if (%::wserver) { %:echo $+(,%::c3) server was: $+ $+(,%::c2) %::wserver }
  if (%::serverinfo) { %:echo $+(,%::c3) quit on: $+ $+(,%::c2) $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss) }
}
alias start.select.whowas.error {
  %:echo $+(,%::c3)
  %:echo $+(,%::c3) .error: $+ $+(,%::c2) there was no such nickname
}
