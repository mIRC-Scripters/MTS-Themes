;adrIRC Theme mrc remote source - START -
;-
alias adrIRC.load { clearall | %:echo  $+ %::c1 $+ ::: Loaded:00 adrIRC v0.01 :) | inflate -a | %::c1 = $1 }
alias adrIRC.whoisinit { %:echo  $+ %::c1 $+ ::: Whois: $1 | %:echo  $+ %::c1 $+ › Fullname: $3- | %:echo  $+ %::c1 $+ › Address: $2 }
alias adrIRC.whoisidle { %:echo  $+ %::c1 $+ › Idle: $duration($1) | %:echo  $+ %::c1 $+ › Sign On: $2- }
alias adrIRC.whoisend { %:echo  $+ %::c1 $+ ::: End of /whois }
alias adrIRC.lusersinit { %:echo  $+ %::c1 $+ ::: Lusers:00 $1 user(s) on $2 server(s) }
alias adrIRC.lusersend { %:echo  $+ %::c1 $+ ::: Lusers:00 $1 user(s) on $3 server(s) }
alias adrIRC.topicinit { %:echo  $+ %::c1 $+ ::: Topic:00 $iif($1-,$1-,no topic set) }
alias adrIRC.mode { %:echo  $+ %::c1 $+ ::: Modes:00 $iif($len($1) <= 1,no modes set,$1-) }
alias adrIRC.users { %:echo  $+ %::c1 $+ ::: Users: [ $+ %::c1 $+   $+ %::c1 $+ Ops: 00 $+ $nick($1,0,o,rvh)  $+ %::c1 $+ Voiced: 00 $+ $nick($1,0,v,roh)  $+ %::c1 $+ Regular: 00 $+ $nick($1,0,r,ovh)  $+ %::c1 $+ Total: 00 $+ $nick($1,0) ] }
alias adrIRC.adminend { %:echo  $+ %::c1 $+ |00 | %:echo  $+ %::c1 $+ ::: end of /admin }
alias adrIRC.part { %:echo  $+ %::c1 $+ ‹‹ Parts  $+ %::c1 $+ (00 $+ $1 $+  $+ %::c1 $+ ):  $+ %::c1 $+  $+ $2 $+ [00 $+ $3 $+  $+ %::c1 $+ ] $iif($4, $+ %::c1 $+ (Reason: $4- $+  $+ %::c1 $+ )) }
alias adrIRC.quit { %:echo  $+ %::c1 $+ ::: Quits00 $1 $iif($2, $+ %::c1 $+ (Reason: $2- $+  $+ %::c1 $+ )) }
alias adrIRC.txtchan { adrIRC.iamcalled | %:echo  $+ %::c1 $+ <00 $+ %::c1 $+  $+ $iif((($2 == @) || ($2 == +)) && ($3),$2) $+ 00 $+ $1 $+  $+ %::c1 $+ >00 $3- }
alias adrIRC.txtquery { adrIRC.iamcalled | %:echo  $+ %::c1 $+ <00 $+ $1 $+  $+ %::c1 $+ >00 $replace($2-,11,00) }
alias adrIRC.actionquery { adrIRC.iamcalled | %:echo  $+ %::c1 $+ *00 $1  $+ %::c1 $+ ›00 $replace($2-,11,00) }
alias adrIRC.actionchan { adrIRC.iamcalled | %:echo  $+ %::c1 $+ * $iif((($2 == @) || ($2 == +)) && ($3),$2) $+ 00 $+ $1  $+ %::c1 $+ ›00 $replace($iif(($2 != @) && ($2 != +),$2-,$3-),11,00) }
alias -l adrIRC.iamcalled { if ($me isin $Strip($1-)) { linesep -s | echo -s   You were called by %::nick in %::chan ( $+ %::server $+ ) at $time   | echo -s   MSG: $1-   | linesep -s | .splay me.wav | flash You have been mentioned at $chan } }
;-
; "inflate" alias was taken from Basic script:
on *:start:{ inflate -s }
on *:JOIN:#: { if ($nick == $me) { _inflate $active } }
on *:open:?: { _inflate $active }
alias _inflate {
  var %w = $1-
  if ($window($1-).type == status) %w = $+(",%w,")
  if (!$window($1-).mdi) window -x %w
  else window -r %w 0 0 $window(-3).dw $window(-3).dh
}
alias inflate {
  if (-* iswm $1) {
    var %type
    if (c isin $1) %type = channel
    elseif (d isin $1) %type = %type chat
    elseif (q isin $1) %type = %type query
    elseif (@ isin $1) %type = %type custom
    elseif (s isin $1) %type = %type status
    elseif (a isin $1) %type = channel chat query custom status
    if (!%type) return
    var %i = 1, %w
    while ($window(*,%i)) { %w = $ifmatch | if ($istok(%type,$window(%w).type,32)) _inflate %w | inc %i }
  }
  elseif ($window($1-)) _inflate $1-
}
;-
;adrIRC Theme mrc remote source - END -
