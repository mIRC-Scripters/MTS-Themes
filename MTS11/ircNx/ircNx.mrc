alias ircnx.whois {
  %:echo .--------02--------12--------12--------14---
  %:echo | %::nick is %::address * %::realname
  if (%thm.ownip) { %:echo | %::nick actual host is $gettok($ifmatch,1,32) ( $+ $gettok($ifmatch,2,32) $+ ) }
  if ($q.net) && (%thm.auth) { %:echo |  %::nick is authed as $ifmatch }
  if (%::operline) { %:echo | %::nick is an 4IRC Operator }
  if (%::chan) %:echo | %::nick is in %::chan
  if (%::wserver) %:echo | %::nick is using %::wserver $+ , %::serverinfo
  if (%::away) %:echo | %::nick is away: %::away
  if (%::idletime) { %:echo | %::nick is idle for $duration(%::idletime) $+ , signed on %::signontime }
  %:echo `--------02--------12--------12--------14---
  unset %thm.auth %thm.ownip
}
alias ircnx.whowas {
  %:echo 01.--------02--------12--------12--------14---
  %:echo | %::nick was %::address * %::realname
  if (%::wserver) %:echo | %::nick using %::wserver
  if (%::serverinfo) %:echo | %::nick quit $asctime($ctime(%::serverinfo),dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss)
  %:echo 01`--------02--------12--------12--------14---
}
alias nn.tsd { return $+(,$1-,) }
alias nn.tgt { return $+(,$1-,) }
alias nn.tgtd { return $+(,$1-,:) }
alias nn.linesep { return 01________02________12________12________14___ }
