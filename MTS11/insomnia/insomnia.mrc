alias ins.whois {
  %:echo $+(,%::c1) $+ [whois: $+ %::nick $+ ]
  %:echo $str($chr(160),10) $+(,%::c1) $+ %::realname $+(,%::c1) $+ ( $+ $+(,%::c2) $+ %::address $+ $+(,%::c1) $+ ) $+(,%::c1) $+ ( $+ $+(,%::c2) $+ $ins.c($gettok(%::address,-1,46)) $+ $+(,%::c1) $+ )
  if (%::realhost) { %echo $str($chr(160),10) $+(,%::c1) $+ Real Address: $+ $+(,%::c2) %::realhost $+(,%::c1) $+ ( $+ $+(,%::c2) $+ %::realip $+ $+(,%::c1) $+ ) }
  if (%::wserver) { %:echo $str($chr(160),10) $+(,%::c1) $+ Server: $+ $+(,%::c2) %::wserver $+(,%::c1) $+ ( $+ $+(,%::c2) $+ %::serverinfo $+ $+(,%::c1) $+ ) }
  if (%::chan) { %:echo $str($chr(160),10) $+(,%::c1) $+ Channels: $+ $+(,%::c2) %::chan }
  if (%::operline) { %:echo $str($chr(160),10) $+(,%::c1) $+ $gettok(%::operline,3-,32) }
  if (%::isregd == is) { %:echo $str($chr(160),10) $+(,%::c1) $+ Services: $+ $+(,%::c2) identified }
  if (%::away) { %:echo $str($chr(160),10) $+(,%::c1) $+ Away: $+ $+(,%::c2) %::away }
  if (%::signontime) { %:echo $str($chr(160),10) $+(,%::c1) $+ Signon time/date: $+ $+(,%::c2) %::signontime }
  if (%::idletime) { %:echo $str($chr(160),10) $+(,%::c1) $+ Idle time: $+ $+(,%::c2) $duration(%::idletime) }
  %:echo $+(,%::c1) $+ [end whois: $+ %::nick $+ ] 
}
alias ins.auth {
  %:echo $+(,%::c1) $+ Auth: $+ $+(,%::c2) $gettok(%::text,1,32) is authed
}
alias ins.whowas {
  %:echo $+(,%::c1) $+ [whowas: $+ %::nick $+ ]
  %echo $str($chr(160),10) $+(,%::c1) $+ Real Name: $+ $+(,%::c2) %::realname $+(,%::c1) $+ ( $+ $+(,%::c2) $+ %::address $+ $+(,%::c1) $+ )
  if (%::wserver) { %:echo $str($chr(160),10) $+(,%::c1) $+ Server: $+ $+(,%::c2) %::wserver }
  if (%::serverinfo) { %:echo $str($chr(160),10) $+(,%::c1) $+ Last Seen: $+ $+(,%::c2) $asctime($ctime(%::serverinfo),ddd mmmm dd hh:nn:ss yyyy) }
  %:echo $+(,%::c1) $+ [end whowas: $+ %::nick $+ ] 
}
alias ins.c {
  if ($chr(58) isin $1-) { return IPv6 Address - $gettok($1-,2,64) }
  elseif ($1 isnum) { return Undetermined IP Address } 
  elseif ($len($1) > 4) { return $1 } 
  elseif ($1 != $null) { return $readini($scriptdircountry.ini,Country,$1) } 
  else { return Undetermined }
}
