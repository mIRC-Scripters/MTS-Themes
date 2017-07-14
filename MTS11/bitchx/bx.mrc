alias bitchx.names {
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
    if ($1 == b) var %d = %d 14[10 $+ $align(13,$gettok(%b,%c,32)) $+ 14]
    if ($1 == w) var %d = %d 1[04 $+ $align(13,$gettok(%b,%c,32)) $+ 1]
    inc %c
    inc %bitchx. [ $+ [ %::chan ] ]
  }
  if (%d) %:echo %d
  unset %d | unset %b
  if ($gettok($2-,%a,32)) { goto one }
}
alias bitchx.endofnames {
  if ( %bitchx. [ $+ [ %::chan ] ] ) %:echo 14[9Users14(03 $+ %::chan $+ 14):09 $+ %bitchx. [ $+ [ %::chan ] ] $+ 14]
  unset %bitchx. [ $+ [ %::chan ] ]
}
alias bitchx.endofnames2 {
  if ( %bitchx. [ $+ [ %::chan ] ] ) %:echo 1[4Users14(01 $+ %::chan $+ 1):04 $+ %bitchx. [ $+ [ %::chan ] ] $+ 1]
  unset %bitchx. [ $+ [ %::chan ] ]
}
alias bitchx.dns {
  %:echo 9┌──────--3─9--3───9-3───────--14─3--14──3-14──────────-- --  -
  %:echo 9│ $align(17,00i15p address) $+ : $iif(%::iaddress,%::iaddress,Unknown)
  %:echo 9| $align(17,00n15amed address) $+ : $iif(%::naddress,%::naddress,Unknown)
  %:echo 9: $align(17,00r15esolved address) $+ : $iif(%::raddress,%::raddress,Unknown)
}
alias bitchx.lusersinit {
  %:echo 9┌──────--3─9--3───9-3───────--14─3--14──3-14──────────-- --  -
  %:echo 9│ 15[14Connected to15(9 $+ $iif(%::network,%::network,%::server) $+ 15)]14
  %:echo 9├──────--3─9--3───9-3───────--14─3--14──3-14──────────-- --  -
  %:echo 9│ 14[15total users on irc14(00 $+ $1 $+ 14)]15
  %:echo 9| 14[15hidden users on irc14(00 $+ $2 $+ 14)]15 
}
alias bitchx.whoisserver %:echo 14: $align(12,00s15erver) $+ : $1
alias bitchx.lusersend {
  %:echo 9│ 14[15lotal users on irc14(00 $+ $1 $+ 14)]15
  %:echo 9: 14[15total servers on irc14(00 $+ $2 $+ 14)] 
}
alias bitchx.whoisinit {
  %:echo 9┌──────--3─9--3───9-3───────--14─3--14──3-14──────────-- --  -
  %:echo 9│ 00 $+ $1 14(15 $+ $2 $+ 14) $iif($country($2), 14(00 $+ $country($2) $+ 14) ) 
  %:echo 9│ $align(12,00i15rcname) $+ : $3-
}
alias bitchx.whoischans {
  var %a = 1
  while $wordwrap(%a,45,$1-) { 
    if (%a == 1) { %:echo 3| $align(12,00c15hannels) $+ : $wordwrap(%a,45,$1-) }
    elseif (%a != 1) { %:echo 3| $align(13, 15) $wordwrap(%a,45,$1-)  } 
    inc %a
  }
}
alias bitchx.whoisidle {
  %:echo 14: $align(12,00i15dle) $+ : $duration($1)
  %:echo 14: $align(12,00s15ignon) $+ : $2-
}
alias bitchx.whoisaway {
  var %a = 1
  while $wordwrap(%a,45,$1-) { 
    if (%a == 1) { %:echo 3| $align(12,00a15way) $+ : $wordwrap(%a,45,$1-) }
    elseif (%a != 1) { %:echo 3| $align(13, 15) $wordwrap(%a,45,$1-) }
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

alias bitchx.dns2 {
  %:echo 4┌──────--5─4--5───4-5───────--14─5--14──5-14──────────-- --  -
  %:echo 4│ $align(17,01i01p address) $+ : $iif(%::iaddress,%::iaddress,Unknown)
  %:echo 4| $align(17,01n01amed address) $+ : $iif(%::naddress,%::naddress,Unknown)
  %:echo 4: $align(17,01r01esolved address) $+ : $iif(%::raddress,%::raddress,Unknown)
}
alias bitchx.lusersinit2 {
  %:echo 4┌──────--5─4--5───4-5───────--14─5--14──5-14──────────-- --  -
  %:echo 4│ 01[14Connected to01(4 $+ $iif(%::network,%::network,%::server) $+ 01)]14
  %:echo 4├──────--5─4--5───4-5───────--14─5--14──5-14──────────-- --  -
  %:echo 4│ 14[01total users on irc14(01 $+ $1 $+ 14)]01
  %:echo 4| 14[01hidden users on irc14(01 $+ $2 $+ 14)]01 
}
alias bitchx.whoisserver2 %:echo 14: $align(12,01s01erver) $+ : $1
alias bitchx.lusersend2 {
  %:echo 4│ 14[01lotal users on irc14(01 $+ $1 $+ 14)]01
  %:echo 4: 14[01total servers on irc14(01 $+ $2 $+ 14)] 
}
alias bitchx.whoisinit2 {
  %:echo 4┌──────--5─4--5───4-5───────--14─5--14──5-14──────────-- --  -
  %:echo 4│ 01 $+ $1 14(01 $+ $2 $+ 14) $iif($country($2), 14(01 $+ $country($2) $+ 14) ) 
  %:echo 4│ $align(12,01i01rcname) $+ : $3-
}
alias bitchx.whoischans2 {
  var %a = 1
  while $wordwrap(%a,45,$1-) { 
    if (%a == 1) { %:echo 5| $align(12,01c01hannels) $+ : $wordwrap(%a,45,$1-) }
    elseif (%a != 1) { %:echo 5| $align(13, 01) $wordwrap(%a,45,$1-)  } 
    inc %a
  }
}
alias bitchx.whoisidle2 {
  %:echo 14: $align(12,01i01dle) $+ : $duration($1)
  %:echo 14: $align(12,01s01ignon) $+ : $2-
}
alias bitchx.whoisaway2 {
  var %a = 1
  while $wordwrap(%a,45,$1-) { 
    if (%a == 1) { %:echo 5| $align(12,01a01way) $+ : $wordwrap(%a,45,$1-) }
    elseif (%a != 1) { %:echo 5| $align(13, 01) $wordwrap(%a,45,$1-) }
    inc %a
  }
}
