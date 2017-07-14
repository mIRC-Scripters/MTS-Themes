alias cl.whois {
  %:echo 14¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯15¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯07¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo 14×15×07×07 %::nick is %::address × %::realname
  if (%::clwhois.auth) { %:echo 14×15×07×0 %::nick is authed as $ifmatch }
  if (%::operline) { %:echo 14×15×07×0 %::nick is an IRC Operator }
  if (%::chan) %:echo 14×15×07×0 %::nick on %::chan
  if (%::wserver) %:echo 14×15×07×0 %::nick using %::wserver $+ , %::serverinfo
  if (%::away) %:echo 14×15×07×0 %::nick is away: %::away
  if (%::idletime) { %:echo 14×15×07×0 %::nick has been idle $duration(%::idletime) $+ , signed on %::signontime }
  %:echo 14________________15________________07________________
  unset %::clwhois.auth
}
alias cl.whowas {
  %:echo 14¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯15¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯07¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo 14×15×07×07 %::nick was %::address × %::realname
  if (%::wserver) %:echo 14×15×07×0 %::nick using %::wserver
  if (%::serverinfo) %:echo 14×15×07×0 %::nick quit $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss)
  %:echo 14________________15________________07________________
}
alias nn.tsd { return $+(,$1-,) }
alias nn.tgt { return $+(,$1-,) }
alias nn.tgtd { return $+(,$1-,:) }
alias nn.linesep { return 14×15×07× 14————————————15————————————07———————————— }
