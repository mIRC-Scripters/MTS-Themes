; alignr identifier by senbei
alias so_alignr {
  if ($3) {
    if ($len($strip($3)) == $1) { return $3 }
    if ($len($strip($3)) > $1) { return $left($strip($3),$calc($1 - 2)) $+ .. }
    else { return $3 $+ $str($2,$calc($1 - $len($strip($3)))) }
  }
}
alias so_ntype {
  if ($left($1,1) == @) return %::c1 $+ @
  if ($left($1,1) == #) return %::c1 $+ C
  return  $+ %::c1 $+ N
}
alias so_replytarget {
  if ($1 == $null) return $2
  if ($2 == $null) return $1
  return $2
}
alias so_dns_start {
  %:echo  $+ %::c2 $+ +----------[0 $+ $so_replytarget(%::nick,%::address) $+  $+ %::c2 $+ ]--------------
}
alias so_dns_error {
  %:echo  $+ %::c2 $+ $eval(|,0) $+ 0 DNS Error, could not resolve
  %:echo  $+ %::c2 $+ +----------[0 $+ end of DNS $+  $+ %::c2 $+ ]---------------------------------------
}
alias so_dns_resolve {
  %:echo  $+ %::c2 $+ $eval(|,0) $+ 0 Resolved to %::iaddress
  %:echo  $+ %::c2 $+ +----------[0 $+ end of DNS $+  $+ %::c2 $+ ]---------------------------------------
} 
alias so_whois_start {
  %:echo  $+ %::c2 $+ +----------[0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]--------------------------
  %:echo  $+ %::c2 $+ $eval(|,0) Nickname:0 %::nick
  %:echo  $+ %::c2 $+ $eval(|,0) Address»:0 %::address
  %:echo  $+ %::c2 $+ $eval(|,0) Realname:0 %::realname
}
alias so_whois_chan {
  %:echo  $+ %::c2 $+ $eval(|,0) Channels:0 %::chan
}
alias so_whois_server {
  %:echo  $+ %::c2 $+ $eval(|,0) Server»»:0 %::wserver  $+ %::c2 $+ (0 $+ %::serverinfo $+  $+ %::c2 $+ )
}
alias so_whois_away {
  %:echo  $+ %::c2 $+ $eval(|,0) Away»»»»:0 %::text
}
alias so_whois_regnick {
  %:echo  $+ %::c2 $+ $eval(|,0) Regnick»:0 %::isregd
}
alias so_whois_ircop {
  %:echo  $+ %::c2 $+ $eval(|,0) IRCOP»»»:0 %::isoper %::operline
}
alias so_whois_idle {
  %:echo  $+ %::c2 $+ $eval(|,0) Idletime:0 $duration(%::idletime)
  %:echo  $+ %::c2 $+ $eval(|,0) Signon»»:0 $duration(%::signontime)
}
alias so_whois_end {
  %:echo  $+ %::c2 $+ +----------[0 $+ $so_alignr(9,»,endofwhois) $+  $+ %::c2 $+ ]--------------------------
}
