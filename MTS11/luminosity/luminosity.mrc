alias luminosity.whois {
  %:echo $+(,%::c2) • $+(,%::c1) Whois on %::nick $+(,%::c2) •
  %:echo $+(%::pre,,%::c1) %::nick is %::realname $+(,%::c3,$chr(40),,%::c2,%::address,,%::c3,$chr(41))
  if (%::operline) { %:echo $str($chr(160) ,14) $+(,%::c1) is a $+(,$gettok(%::operline,3-,32)) }
  if (%::ishelpop) { %:echo $str($chr(160) ,14) $+(,%::c1) is available for help }
  if (%::realhost) { %:echo $str($chr(160) ,14) $+(,%::c1) is connecting from %::realhost $+(,%::c3,$chr(40),,%::c2,%::realip,,%::c3,$chr(41)) }
  if (%::usermode) { %:echo $str($chr(160) ,14) $+(,%::c1) is using modes: %::usermode }
  if (%::issecure) { %:echo $str($chr(160) ,14) $+(,%::c1) is a secure connection }
  if (%::swhois) { %:echo $str($chr(160) ,14) $+(,%::c1) %::swhois }
  if (%::chan) { %:echo $str($chr(160) ,14) $+(,%::c1) is on %::chan }
  if (%::isregd == is) { %:echo $str($chr(160) ,14) $+(,%::c1) is identified }
  if (%::away) { %:echo $str($chr(160) ,14) $+(,%::c1) is away: %::away }
  if (%::wserver) { %:echo $str($chr(160) ,14) $+(,%::c1) is on %::wserver $+(,%::c3,$chr(40),,%::c2,%::serverinfo,,%::c3,$chr(41)) }
  if (%::signontime) { %:echo $str($chr(160) ,14) $+(,%::c1) signed on $asctime($ctime(%::signontime),mmmm dd $+ $chr(44) yyyy $+ $chr(44) h:nn tt) }
  if (%::idletime) { %:echo $str($chr(160) ,14) $+(,%::c1) has been idle $duration(%::idletime) }
  %:echo $+(,%::c2) • $+(,%::c1) End of whois $+(,%::c2) •
}

alias luminosity.whowas {
  %:echo $+(,%::c2) • $+(,%::c1) Whowas on %::nick $+(,%::c2) •
  %:echo $+(,%::c1,%::pre) %::nick was %::realname $+(,%::c3,$chr(40),,%::c2,%::address,,%::c3,$chr(41))
  if (%::wserver) { %:echo $str($chr(160) ,14) $+(,%::c1) was on %::wserver }
  if (%::serverinfo) { %:echo $str($chr(160) ,14) $+(,%::c1) was last seen $asctime($ctime(%::serverinfo),mmmm dd $+ $chr(44) yyyy $+ $chr(44) h:nn tt) }
  %:echo $+(,%::c2) • $+(,%::c1) End of whowas $+(,%::c2) •
}
