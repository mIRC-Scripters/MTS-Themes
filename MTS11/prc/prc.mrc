alias mirc.whois {
  %:echo -
  %:echo %::pre %::nick is %::address * %::realname
  if (%::mircwhois.auth) { %:echo %::pre %::nick is authed as %::mircwhois.auth }
  if (%::operline) { %:echo %::pre %::nick is an IRC Operator }
  if (%::chan) %:echo %::pre %::nick on %::chan
  if (%::wserver) %:echo %::pre %::nick using %::wserver $+ , %::serverinfo
  if (%::away) %:echo %::pre %::nick is away: %::away
  if (%::idletime) { %:echo %::pre %::nick has been idle $duration(%::idletime) $+ , signed on $duration($calc($ctime - $ctime(%::signontime))) ago }
  %:echo %::pre %::nick End of /WHOIS list.
  %:echo -
  unset %::mircwhois.auth
}
alias mirc.whowas {
  %:echo -
  %:echo %::pre %::nick was %::address * %::realname
  if (%::wserver) %:echo %::pre %::nick using %::wserver %::serverinfo
  %:echo %::pre End of WHOWAS
  %:echo -
}
