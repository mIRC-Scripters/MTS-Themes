alias bitch.whois {
  %:echo %::pre 15(10whois. $+ %::nick $+ 15)
  %:echo 10I11nfo:15 %::nick 11(15 $+ %::address $+ 11) 
  %:echo 10N11ame:15 %::realname
  if (%::bitch.auth) { %:echo 10A11uthed as15 %::bitch.auth }
  if (%::operline) { %:echo 10H11e 15is an IRC Operator }
  if (%::chan) %:echo 10C11annel:15 %::chan
  if (%::wserver) %:echo 10S11erver:15 %::wserver ( $+ %::serverinfo $+ )
  if (%::away) %:echo 10A11way:15 %::away
  if (%::idletime) { %:echo 10I11dle:15 $duration(%::idletime) }
  if (%::idletime) { %:echo 10S11igned on:15 $duration($calc($ctime - $ctime(%::signontime))) ago }
  %:echo %::pre 15(10whois. $+ %::nick $+ 15)
  unset %::mircwhois.auth
}
alias bitch.whowas {
  %:echo %::pre 15(10whowas. $+ %::nick $+ 15)
  %:echo 10H11e was:15 %::address
  %:echo 10N11ame:15 %::realname
  if (%::wserver) %:echo 10U11sed:15 %::wserver ( $+ %::serverinfo $+ )
  %:echo %::pre 15(10whowas. $+ %::nick $+ 15)
}
alias bitch.dns {
  %:echo %::pre 15(10dns. $+ %::nick $+ 15)
  %:echo 10H11ost:15 %::address
  %:echo 10I11p:15 %::iaddress
  %:echo 10L11ong ip:15 $longip($raddress) $+ $longip($address)
  %:echo %::pre 15(10dns. $+ %::nick $+ 15)
}
alias bitch.pwhois {
}
