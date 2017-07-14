alias names {
  var %a = 1
  :one
  while $gettok($2-,%a,32) {
    var %b = %b $gettok($2-,%a,32)
    inc %a
    if ($gettok(%b,5,32)) goto two
  }
  :two
  var %c = 1
  while $gettok(%b,%c,32) {
    if ($1 == b) var %d = %d 11·0 $+ $align(13,$gettok(%b,%c,32)) $+ 
    if ($1 == w) var %d = %d 11·0 $+ $align(13,$gettok(%b,%c,32)) $+ 
    inc %c
    inc %ursers. [ $+ [ %::chan ] ]
  }
  %:echo %d
  unset %d | unset %b
  if ($gettok($2-,%a,32)) { goto one }
}
alias endofnames {
  if ( %users. [ $+ [ %::chan ] ] ) %:echo 11·0Users14(0 $+ %::chan $+ 14):0 $+ %users. [ $+ [ %::chan ] ] $+ 11·
  unset %users. [ $+ [ %::chan ] ]
}
alias endofnames2 {
  if ( %users. [ $+ [ %::chan ] ] ) %:echo 11·0Users14(0 $+ %::chan $+ 14):0 $+ %users. [ $+ [ %::chan ] ] $+ 11·
  unset %users. [ $+ [ %::chan ] ]
}
alias dnsx {
  %:echo 11..........................................................
  %:echo 11| $align(17,0i14p address) $+ : $iif(%::iaddress,%::iaddress,Unknown)
  %:echo 11| $align(17,0n14amed address) $+ : $iif(%::naddress,%::naddress,Unknown)
  %:echo 11| $align(17,0r14esolved address) $+ : $iif(%::raddress,%::raddress,Unknown)
}
alias lusersinit {
  %:echo 11.......................................................
  %:echo 11|· 1514Connected to14: (0 $+ $iif(%::network,%::network,%::server) $+ 14)
  %:echo 11|· 14(0total users on irc14(0 $+ $1 $+ 14)
  %:echo 11|· 14(0hidden users on irc14(0 $+ $2 $+ 14) 
}
alias whoisserver %:echo 11|· $align(12,0s15erver) $+ : $1
alias lusersend {
  %:echo 11|· 14(0lotal users on irc14(0 $+ $1 $+ 14)
  %:echo 11|· 14(0total servers on irc14(0 $+ $2 $+ 14) 
}
alias whoisinit {
  %:echo 11.......................................................
  %:echo 11|· 0 $+ $1 14(15 $+ $2 $+ 14) $iif($country($2), 14(00 $+ $country($2) $+ 14) ) 
  %:echo 11|· $align(12,00i15rcname) $+ : $3-
}
alias whoischans {
  var %a = 1
  while $wordwrap(%a,45,$1-) { 
    if (%a == 1) { %:echo 11|· $align(12,0c15hannels) $+ : $wordwrap(%a,45,$1-) }
    elseif (%a != 1) { %:echo 11|· $align(13, 15) $wordwrap(%a,45,$1-)  } 
    inc %a
  }
}
alias whoisidle {
  %:echo 11|· $align(12,0i15dle) $+ : $duration($1)
  %:echo 11|· $align(12,0s15ignon) $+ : $2-
}
alias whoisaway {
  var %a = 1
  while $wordwrap(%a,45,$1-) { 
    if (%a == 1) { %:echo 11|· $align(12,0a15way) $+ : $wordwrap(%a,45,$1-) }
    elseif (%a != 1) { %:echo 11|· $align(13, 15) $wordwrap(%a,45,$1-) }
    inc %a
  }
}
alias -l align if $len($strip($2-)) > $1 { return $left($2-,$calc($1 - 3)) $+ ... } | return $2- $+ $+ $str( ,$calc($1 - $len($strip($2-)))) 
alias -l wordwrap {
  ; syntax: $wordwrap(line#,linewidth,text)
  if ($1 !isnum) || ($2 !isnum) || ($3 == $null) { halt }
  var %wordwrap.lines.count = 1,%wordwrap.in = $remove($3-,) | :loop | var %wordwrap.out.test = %wordwrap.out $gettok(%wordwrap.in,1,32)
  if ($len(%wordwrap.out.test) > $2) { if (!%wordwrap.out) { var %wordwrap.out = $left(%wordwrap.in,$2) | if ($len($gettok(%wordwrap.in,1,32)) <= $2) { var %wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32) } | else { var %wordwrap.in = $right(%wordwrap.in,$calc( $len(%wordwrap.in) - $2 )) } } | goto finish } | var %wordwrap.out = %wordwrap.out $gettok(%wordwrap.in,1,32),%wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32)
  if ($gettok(%wordwrap.in,1,32)) { goto loop } | :finish
  if ($1 != %wordwrap.lines.count) { inc %wordwrap.lines.count | unset %wordwrap.out %wordwrap.out.test | goto loop } | return %wordwrap.out
}
