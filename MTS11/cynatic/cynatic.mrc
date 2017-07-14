;Somewhat based on Winter by gr33ny
alias _cynspa { return $str($chr(160),$1) }
alias _cyncalc {
  var %y = $len($1-)
  var %t = $calc(17 - %y)
  return $1- $str($chr(160),%t)
}
alias _cynwrap {
  var %x = $1

}
alias c.whois {
  %:echo $_cynspa(2) $_cyncalc(_whois) /whois %::nick
  %:echo $_cynspa(2) $_cyncalc(_whois) name %::realname ( $+ %::address $+ )
  if (%::cwhois.auth) { %:echo  $_cynspa(2) $_cyncalc(_whois) authnick %::pre $ifmatch }
  if (%::operline) { %:echo  $_cynspa(2) $_cyncalc(_whois) %::nick is an IRC Operator }
  if (%::chan) {
    %:echo $_cynspa(2) $_cyncalc(_whois) #'s %::pre $whoisloop($gettok(%::chan,1-5,32))
    if ($gettok(%::chan,6-10,32)) { %:echo $_cynspa(2) $_cyncalc(_whois) #'s %::pre $whoisloop($gettok(%::chan,6-10,32)) }
    if ($gettok(%::chan,11-15,32)) { %:echo $_cynspa(2) $_cyncalc(_whois) #'s %::pre $whoisloop($gettok(%::chan,11-15,32)) }
    if ($gettok(%::chan,16-20,32)) { %:echo $_cynspa(2) $_cyncalc(_whois) #'s %::pre $whoisloop($gettok(%::chan,16-20,32)) }

    %:echo $_cynspa(2) $_cyncalc(_whois) Op %::pre $matchtok(%::chan,@,0,32) $+ , Voice %::pre $matchtok(%::chan,+,0,32) $+ ,  Total %::pre $gettok(%::chan,%::chan,32) $+ .
  }
  if (%::wserver) { %:echo $_cynspa(2) $_cyncalc(_whois) server %::pre %::wserver ( $+ %::serverinfo $+ ) }
  if (%::away) { %:echo $_cynspa(2) $_cyncalc(_whois) away %::pre %::away }
  if (%::idletime) {
    %:echo $_cynspa(2) $_cyncalc(_whois) idle %::pre $duration(%::idletime)
    %:echo $_cynspa(2) $_cyncalc(_whois) signed on %::pre $duration($calc($ctime - $ctime(%::signontime))) ago
  }
  %:echo $_cynspa(2) $_cyncalc(_whois) /whois
  unset %::cwhois.auth
}
alias c.whowas {
  %:echo $_cynspa(2) $_cyncalc(_whowas) /whowas %::nick
  %:echo $_cynspa(2) $_cyncalc(_whowas) %::nick was %::realname %::pre %::address
  if (%::wserver) { %:echo $_cynspa(2) $_cyncalc(_whowas) server; %::wserver }
  if (%::serverinfo) { return }
}
alias -l whoisloop {
  var %x = $1-, %t,%f = 1
  while (%f <= 5) {
    if ($istok($comnick(%::nick),$gettok(%x,%f,32),32)) { %t = %t $+(,$gettok(%x,%f,32),) }
    else { %t = %t $gettok(%x,%f,32) }
    inc %f
  }
  return %t
}
alias -l comnick { 
  if (!$comchan($1,0)) { return $1- } 
  var %x 1 
  while ($comchan($1,%x)) { 
    var %comnick = %comnick $iif($1 isop $comchan($1,%x),@, $iif($1 isvoice $comchan($1,%x),+,) ) $+ $comchan($1,%x) 
    inc %x 
  } 
  return %comnick 
}
