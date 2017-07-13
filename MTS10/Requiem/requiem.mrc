alias requiem.whois {
  %:echo  $+ %::c2 $+ ┌──────────────02────────────────05──────────────────────────────
  %:echo  $+ %::c2 $+ │ $+  $+ %::c1 whois $+ %::c3 %::nick
  %:echo  $+ %::c2 $+ ├───────02─────────────05──────────────────────
  %:echo │ $+  $+ %::c1 name: $+ %::c3 %::realname
  %:echo │ $+  $+ %::c1 address: $+ %::c3 %::address
}
alias requiem.chans %:echo │ $+  $+ %::c1 chans: $+ %::c3 %::chan  $+ %::c1 $+ ( $+ %::c3 $+  $+ $comchan(%::nick,0)  $+ %::c2 $+ common $+ %::c1 $+ )
alias requiem.idle {
  %:echo │ $+  $+ %::c1 idle: $+ %::c3 $duration(%::idletime)
  %:echo │ $+  $+ %::c1 signed on: $+ %::c3 %::signontime $+ 
}

alias requiem_align_l {
 if ($2) {
 if $len($strip($2-)) <= $1 { return $2- $+ $str( ,$calc($1 - $len($strip($2-)))) }
 else { return $left($2-,$1) $+ $str( ,$calc($1 - $len($strip($2-)))) }
 }
 else return $str( ,$1)
}