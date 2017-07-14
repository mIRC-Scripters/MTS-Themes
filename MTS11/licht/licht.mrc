alias licht.whois {
  %:echo whois on %::nick
  %:echo -
  %:echo - realname ~ %::realname
  %:echo - address ~ %::address
}

alias licht.topic {
  %:echo ...........................( %::chan ) ...... ... .. .
  %:echo .. %::text
  %:echo .......................................... ... .. .
}

alias licht.whowas {
  %:echo whowas on %::nick
  %:echo -
  %:echo - realname ~ %::realname
  %:echo - address ~ %::address
}

alias licht.idle {
  %:echo - idletime ~ $duration(%::idletime)
}

alias licht.topic2 {
  %:echo set by ... %::nick
  %:echo date set ... %::text
}
