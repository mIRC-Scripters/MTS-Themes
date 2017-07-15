alias xret return $+($eval($1,2),©,$eval($2,2),©,$eval($3,2),©,$eval($4,2),©,$5-)
alias crep {
  var %a = $gettok($1-,1,169)
  var %b = $gettok($1-,2,169)
  var %c = $gettok($1-,3,169)
  var %d = $gettok($1-,4,169)
  var %e = $gettok($1-,5-,169)
  return $replace(%e,<c1>,$+(,%a),<c2>,$+(,%b),<c3>,$+(,%c),<c4>,$+(,%d)) 
}
alias arep {
  var %a = $gettok($1-,1,169)
  var %b = $gettok($1-,2,169)
  var %c = $gettok($1-,3,169)
  var %d = $gettok($1-,4,169)
  var %e = $gettok($1-,5-,169)
  return $replace(%e,$chr(45),$+(,%a,$chr(45),,%c),$chr(46),$+(,%a,$chr(46),,%c),$chr(43),$+(,%a,$chr(43),,%c),$chr(64),$+(,%a,$chr(64),,%c),$chr(58),$+(,%a,$chr(58),,%c),$chr(35),$+(,%b,$chr(35),,%c) ) 
}

dialog blink {
  title "Blink [/blink]"
  size -1 -1 176 83
  box "Theme Options", 1, 4 4 168 75
  check "Enable /motd on connect", 2, 15 24 145 16
  check "Enable /names display", 3, 15 40 132 16
  button "hype RULES!!!", 99, 125 15 33 11, hide ok
  check "Enable /who", 4, 15 56 100 16
}
on *:dialog:blink:*:*:{
  if $devent == init {
    if (%blink.motd == on ) did -c $dname 2
    if (%blink.names == on ) did -c $dname 3
    if (%blink.who == on ) did -c $dname 4
  }
  if ($devent == sclick) {
    if ($did == 2) { set %blink.motd $iif($did($dname,2).state == 1,on,off) }
    if ($did == 3) { set %blink.names $iif($did($dname,3).state == 1,on,off) }
    if ($did == 4) { set %blink.who $iif($did($dname,4).state == 1,on,off) }
  }
}
alias blink dialog -m blink blink
alias blink.halt { return }
alias blink.load {
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(5,50, $crep($+(%x,<c1>Ú<c3>Ä<c2>ÄÄ<c3>Ä<c1>> <c3>welcome )))
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>³ÿ<c2>Ú<c1>ÄÄ<c3>ÄÄ<c4>Ä<c2>ÄÄÄÄ<c1>ÄÄÄ<c3>ÄÿÄÄÄ<c2>ÄÄÄÄ<c1>ÄÄÄÄ<c3>ÄÄÄ<c4>Ä<c3>ÄÄÄ<c1>Ä<c2>ÿÄÿÄ )))
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>|ÿ<c2>³ <c1>b<c3>link theme loaded..)))
  %:echo $blink.wa(5,50,$crep($+(%x,<c2>³ÿ<c2>³ <c1>v<c3>ersion 1.6 )))
  %:echo $blink.wa(5,50,$crep($+(%x,<c2>³ÿ<c3>³ <c1>h<c3>ttp://www.webproficio.com )))
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>À<c2>Ä´  <c1>/<c3>blink (for options) )))
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(7,50,$crep($+(%x,<c1>À<c3>ÄÿÄÄ<c1>ÄÄÄ<c2>ÄÄ<c3>ÄÄ<c4>Ä<c3>ÄÄ<c2>Ä<c1>ÄÄÄÄ<c2>ÄÄÄ<c3>ÄÄÿÄ<c4>Ä<c3>Ä<C1>ÄÄ<c2>ÄÄÿÄÿ<c3>Ä)))
  linesep
}



alias blink.chantopic { 
  ;c3
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo -
  %:echo $blink.wa(5,60, $crep($+(%x,<c1>Ú<c3>Ä<c2>ÄÄ<c3>Ä<c1>> <c3>,$arep($+(%x,%::chan))   )))
  %:echo $blink.wa(5,60,$crep($+(%x,<c3>³ÿ<c2>Ú<c1>ÄÄ<c3>ÄÄ<c4>Ä<c2>ÄÄÄÄ<c1>ÄÄÄ<c3>ÄÿÄÄÄ<c2>ÄÄÄÄ<c1>ÄÄÄÄ<c3>ÄÄÄ<c4>ÄÄ<c3>ÄÄÄ<C2>ÄÄÄ<c1>ÄÄÄ<c2>ÄÄÄÿÄÿÄÿ<c4>Ä )))
  var %a = 1 | while $wordwrap(%a,50,%::text) { %:echo $blink.wa(5,63,$crep($+(%x,<c3>³ÿ<c2>³ $iif(%a == 1,<c1>t<c3>opic<c1>:ÿÿ<c3>,ÿÿÿÿÿÿÿÿ<c3>) $wordwrap(%a,50,$+(,%::text)) )))  | inc %a }
  set %:::chan. [ $+ [ %::chan ] ] $+ .topic yes
  ;--
}

alias blink.chantopicset {  
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(5,70,$crep($+(%x,<c2>³ÿ<c3>| <c1>s<c3>etby<c1>:ÿÿÿ<c3>, %::nick,$chr(32),on,$chr(32), $arep($+(%x,%::text)))          )))
}

alias blink.chancreat {   
  ;329
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  if (%:::chan. [ $+ [ [ %::chan ] ] $+ .topic ]  != yes) {
    %:echo -
    %:echo $blink.wa(5,60, $crep($+(%x,<c1>Ú<c3>Ä<c2>ÄÄ<c3>Ä<c1>> <c3>,$arep($+(%x,%::chan))   )))
    %:echo $blink.wa(5,60,$crep($+(%x,<c3>³ÿ<c2>Ú<c1>ÄÄ<c3>ÄÄ<c4>Ä<c2>ÄÄÄÄ<c1>ÄÄÄ<c3>ÄÿÄÄÄ<c2>ÄÄÄÄ<c1>ÄÄÄÄ<c3>ÄÄÄ<c4>ÄÄ<c3>ÄÄÄ<C2>ÄÄÄ<c1>ÄÄÄ<c2>ÄÄÄÿÄÿÄÿ<c4>Ä )))
    %:echo $blink.wa(5,60,$crep($+(%x,<c3>³ÿ<c2>³ <c1>t<c3>opic<c1>:ÿÿ<c2><c3> none )))  
  }
  %:echo $blink.wa(5,60,$crep($+(%x,<c2>|ÿ<c3>³ <c1>m<c3>ade<c1>ÿ:ÿÿ<c2><c3> $asctime($arep($+(%x,%::text))) )))
  %:echo $blink.wa(5,60,$crep($+(%x,<c2>À<c3>Ä´ <c1>m<c3>odes<c1>:ÿÿÿ<c2>, $+(<c3>,%:::chan. [ $+ [ [ %::chan ] ] $+ .modes ] ) )))
  %:echo $blink.wa(7,60,$crep($+(%x,<c1>À<c3>ÄÿÄÄ<c1>ÄÄÄ<c2>ÄÄ<c3>ÄÄ<c4>Ä<c3>ÄÄ<c2>Ä<c1>ÄÄÄÄ<c2>ÄÄÄ<c1>ÄÄÄ<c3>ÄÄÿÄ<c4>Ä<c3>Ä<C1>ÄÄ<c2>ÄÄÿÄÿ<c3>Ä)))
  else  %:echo -
  .timer 1 30  unset %:::chan*
  halt
}

alias blink.chanmodes {   var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©) | set %:::chan. [ $+ [ %::chan ] ] $+ .modes $arep($+(%x,%::modes)) }

alias blink.po return $+($+(,$1),$chr(40),$+(,$2),$3-,$+(,$1),$chr(41))

alias blink.names1 {
  if (%blink.names == on) {
    var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
    %:echo $blink.wa(5,65, $crep($+(%x,<c1>Ú<c3>Ä<c2>ÄÄ<c3>Ä<c1>> <c3>, names<c1>: $arep($+(%x,%::chan))   )))
    %:echo $blink.wa(5,65,$crep($+(%x,<c2>³ÿ<c3>Ú<c1>ÄÄ<c3>ÄÄ<c4>Ä<c2>ÄÄÄÄ<c1>ÄÄÄ<c3>ÄÿÄÄÄ<c2>ÄÄÄÄ<c1>ÄÄÄÄ<c3>ÄÄÄ<c4>ÄÄ<c3>ÄÄÄ<C2>ÄÄÄ<c1>ÄÄÄ<c2>ÄÄÄÿÄÿÄÿ<c4>Ä )))
    var %a = 1 | while $wordwrap(%a,50,%::text) { %:echo $blink.wa(5,75,$crep($+(%x,<c3>³ÿ<c2>³ $wordwrap(%a,50,%::text) )))  | inc %a }
    %:echo $blink.wa(5,75,$crep($+(%x,<c3>À<c2>Ä´ ÿÿ )))

  }
}
alias blink.names2 {
  if (%blink.names == on) {  
    var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©) 
    %:echo $blink.wa(7,70,$crep($+(%x,<c3>À<c2>ÄÄÿÄÄ<c1>ÄÄÄ<c2>ÄÄ<c3>ÄÄ<c4>Ä<c3>ÄÄ<c2>Ä<c1>ÄÄÄÄ<c2>ÄÄÄ<c1>ÄÄÄ<c3>ÄÄÿÄ<c4>Ä<c3>Ä<C1>ÄÄ<c2>ÄÄÿÄÿ<c3>Ä)))
    linesep
  } 
}

alias blink.motd1 {  
  if (%blink.motd == on) {
    var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
    %:echo $blink.wa(5,65, $crep($+(%x,<c1>Ú<c3>Ä<c2>ÄÄ<c3>Ä<c1>> <c3>, motd<c1>:<c3> $network  )))
    %:echo $blink.wa(5,65,$crep($+(%x,<c2>³ÿ<c3>Ú<c1>ÄÄ<c3>ÄÄ<c4>Ä<c2>ÄÄÄÄ<c1>ÄÄÄ<c3>ÄÿÄÄÄ<c2>ÄÄÄÄ<c1>ÄÄÄÄ<c3>ÄÄÄ<c4>ÄÄ<c3>ÄÄÄ<C2>ÄÄÄ<c1>ÄÄÄ<c2>ÄÄÄÿÄÿÄÿ<c4>Ä )))
  }
}
alias blink.motd2 {  
  if (%blink.motd == on)  {     
    var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
    %:echo $blink.wa(5,75,$crep($+(%x,<c3>À<c2>Ä´ ÿÿ ))) 
    %:echo $blink.wa(7,70,$crep($+(%x,<c3>À<c2>ÄÄÿÄÄ<c1>ÄÄÄ<c2>ÄÄ<c3>ÄÄ<c4>Ä<c3>ÄÄ<c2>Ä<c1>ÄÄÄÄ<c2>ÄÄÄ<c1>ÄÄÄ<c3>ÄÄÿÄ<c4>Ä<c3>Ä<C1>ÄÄ<c2>ÄÄÿÄÿ<c3>Ä))) 
    linesep 
  }
}

alias blink.lusers { 
  linesep
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(5,65, $crep($+(%x,<c1>Ú<c3>Ä<c2>ÄÄ<c3>Ä<c1>> <c3> lusers<c1>: <c2> $lower($network) )))
  %:echo $blink.wa(5,65,$crep($+(%x,<c3>³ÿ<c2>Ú<c1>ÄÄ<c3>ÄÄ<c4>Ä<c2>ÄÄÂÄ<c1>ÄÄÄ<c3>ÄÿÄÄÄ<c2>ÄÄÄÄ<c1>ÄÄÄÄ<c3>ÄÄÄ<c4>Ä<c3>ÄÄÄ<c1>Ä<c2>ÿÄÿÄ )))
  %:echo $blink.wa(5,65,$crep($+(%x,<c3>|ÿ<c2>³ <c1>n<c3>ick<c1>:ÿ<c2>³<c3> $me )))
  %:echo $blink.wa(5,70,$crep($+(%x,<c1>³ÿ<c2>³ <c1>s<c3>erv<c1>:ÿ<c3>| $arep($+(%x,$server))  )))
  set %:::lusers.norm %::users
  set %:::lusers.inv %::text
  set %:::lusers.servs %::value
}
alias blink.luserops {     var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©) | %:echo $blink.wa(5,70,$crep($+(%x,<c1>³ÿ<c3>³ <c1>u<c3>ser<c1>:ÿ<c3>³ $+(%:::lusers.norm,norm) <c1>/<c3> $+(%:::lusers.inv,invis) <c1>/<c3> $+(%::value,cops)  )))  }
alias blink.luserun {  halt }
alias blink.luserchan { 
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(5,65,$crep($+(%x,<c3>|ÿ<c2>³ <c1>c<c3>han<c1>:ÿ<c2>³<c3> %::value on  $+(%:::lusers.servs,servers) )))
  %:echo $blink.wa(5,65,$crep($+(%x,<c3>À<c2>Ä´ <c1>o<c3>nÿÿ<c1>:ÿ<c2>³<c3> $uptime(server,1) )))


}
alias blink.luserstat {
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(7,65,$crep($+(%x,<c1>À<c3>ÄÿÄÄ<c1>ÄÄÄ<c2>ÁÄ<c3>ÄÄ<c4>Ä<c3>ÄÄ<c2>Ä<c1>ÄÄÄÄ<c2>ÄÄÄ<c3>ÄÄÿÄ<c4>Ä<c3>Ä<C1>ÄÄ<c2>ÄÄÿÄÿ<c3>Ä)))
  linesep
}


alias align if $len($strip($2-)) > $1 { return $left($2-,$calc($1 - 3)) $+ ... } | return $2- $+ $+ $str( ,$calc($1 - $len($strip($2-)))) 
alias align2 if $len($strip($2-)) > $1 { return $left($2-,$calc($1 - 3)) $+ ... } | return $str( ,$calc($1 - $len($strip($2-)))) $+ $2-
alias align3 if $len($strip($2-)) > $1 { return $left($2-,$calc($1 - 3)) $+ ... } | var %a = $or($calc(($1 - $len($strip($2-)))/2)) | return $str( ,%a) $+ $2- $+ $str( ,%a)

alias wordwrap {
  ; syntax: $wordwrap(line#,linewidth,text)
  var %wordwrap.lines.count = 1,%wordwrap.in = $remove($3-,) | :loop | var %wordwrap.out.test = %wordwrap.out $gettok(%wordwrap.in,1,32)
  if ($len(%wordwrap.out.test) > $2) { if (!%wordwrap.out) { var %wordwrap.out = $left(%wordwrap.in,$2) | if ($len($gettok(%wordwrap.in,1,32)) <= $2) { var %wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32) } | else { var %wordwrap.in = $right(%wordwrap.in,$calc( $len(%wordwrap.in) - $2 )) } } | goto finish } | var %wordwrap.out = %wordwrap.out $gettok(%wordwrap.in,1,32),%wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32)
  if ($gettok(%wordwrap.in,1,32)) { goto loop } | :finish
  if ($1 != %wordwrap.lines.count) { inc %wordwrap.lines.count | unset %wordwrap.out %wordwrap.out.test | goto loop } | return %wordwrap.out
}
alias blink.wa { return $align($1,ÿ) $align($2,$3-)  }


alias blink.whoisinit { 
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(5,50, $crep($+(%x,<c1>Ú<c3>Ä<c2>ÄÄ<c3>Ä<c1>> <c3>whois<c1>:<c3> %::nick )))
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>³ÿ<c2>Ú<c1>ÄÄ<c3>ÄÄ<c4>Ä<c2>ÄÄÂÄ<c1>ÄÄÄ<c3>ÄÿÄÄÄ<c2>ÄÄÄÄ<c1>ÄÄÄÄ<c3>ÄÄÄ<c4>Ä<c3>ÄÄÄ<c1>Ä<c2>ÿÄÿÄ )))
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>|ÿ<c2>³ <c1>n<c3>ame<c1>:ÿ<c2>³<c3> %::realname )))
  %:echo $blink.wa(5,70,$crep($+(%x,<c1>³ÿ<c2>³ <c1>a<c3>ddy<c1>:ÿ<c3>| $arep($+(%x,%::address))  )))
}
alias blink.whoischan { 
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  var %a = 1 
  while $wordwrap(%a,60,%::chan) { 
    %:echo $blink.wa(5,65,$crep($+(%x,<c2>³ÿ<c1>| <c1>c<c3>han<c1>:ÿ<c2>³<c3> $arep($+(%x,$wordwrap(%a,60,$+(%::chan))))  )))

    inc %a 
  }

}
alias blink.whoisserv {    var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©) | %:echo $blink.wa(5,50,$crep($+(%x,<c1>³ÿ<c3>³ <c1>s<c3>erv<c1>:ÿ<c2>³<c3> $arep($+(%x,%::wserver))  ))) }
alias blink.whoisaway { 
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>³ÿ<c2>³ <c1>a<c3>way<c1>:ÿ<c2>³<c3> %::text  )))
}
alias blink.whoisidle { 
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>³ÿ³ <c1>i<c3>dle<c1>:ÿ<c2>³<c3> $duration(%::idletime)  )))
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>À<c2>Ä´ <c1>s<c3>ign<c1>:ÿ<c2>³<c3> $arep($+(%x,%::signontime))  )))
}
alias blink.whoisend {
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(7,50,$crep($+(%x,<c1>À<c3>ÄÿÄÄ<c1>ÄÄÄ<c2>ÁÄ<c3>ÄÄ<c4>Ä<c3>ÄÄ<c2>Ä<c1>ÄÄÄÄ<c2>ÄÄÄ<c3>ÄÄÿÄ<c4>Ä<c3>Ä<C1>ÄÄ<c2>ÄÄÿÄÿ<c3>Ä)))
  linesep
  haltdef
}
alias blink.whowasinit { 
  set %:::whowas yes
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(5,50, $crep($+(%x,<c1>Ú<c3>Ä<c2>ÄÄ<c3>Ä<c1>> <c3>whowas )))
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>³ÿ<c2>Ú<c1>ÄÄ<c3>ÄÄ<c4>Ä<c2>ÄÄÂÄ<c1>ÄÄÄ<c3>ÄÿÄÄÄ<c2>ÄÄÄÄ<c1>ÄÄÄÄ<c3>ÄÄÄ<c4>Ä<c3>ÄÄÄ<c1>Ä<c2>ÿÄÿÄ )))
  %:echo $blink.wa(5,50,$crep($+(%x,<c3>|ÿ<c2>³ <c1>n<c3>ame<c1>:ÿ<c2>³<c3> $3 )))
  %:echo $blink.wa(5,75,$crep($+(%x,<c3>|ÿ<c2>³ <c1>a<c3>ddy<c1>:ÿ<c2>³<c3> $arep($+(%x,$2)) )))
  %:echo $blink.wa(7,50,$crep($+(%x,<c1>À<c3>ÄÿÄÄ<c1>ÄÄÄ<c2>ÁÄ<c3>ÄÄ<c4>Ä<c3>ÄÄ<c2>Ä<c1>ÄÄÄÄ<c2>ÄÄÄ<c3>ÄÄÿÄ<c4>Ä<c3>Ä<C1>ÄÄ<c2>ÄÄÿÄÿ<c3>Ä)))
}
alias blink.who1 {
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  if (!%:::who) {
    %:echo $blink.wa(5,50, $crep($+(%x,<c1>Ú<c3>Ä<c2>ÄÄ<c3>Ä<c1>> <c3>who )))
    %:echo $blink.wa(5,50,$crep($+(%x,<c3>³ÿ<c2>Ú<c1>ÄÄ<c3>ÄÄ<c4>Ä<c2>ÄÄÄÄ<c1>ÄÄÄ<c3>ÄÿÄÄÄ<c2>ÄÄÄÄ<c1>ÄÄÄÄ<c3>ÄÄÄ<c4>Ä<c3>ÄÄÄ<c1>Ä<c2>ÿÄÿÄ )))
  }
  inc %:::who | var %n = %::nick
  %:echo $blink.wa(5,75,$crep($+(%x,<c3>³ÿ<c2>³ <c1>,$mid(%n,1,1),<c3>,$right(%n,-1),<c1>:ÿ<c3> $arep($+(%x,%::address )) )))
}
alias blink.who2 { 
  var %x = $+(%::c1,©,%::c2,©,%::c3,©,%::c4,©)
  %:echo $blink.wa(5,75,$crep($+(%x,<c3>À<c2>Ä´ ÿÿ ))) 
  %:echo $blink.wa(7,70,$crep($+(%x,<c3>À<c2>ÄÄÿÄÄ<c1>ÄÄÄ<c2>ÄÄ<c3>ÄÄ<c4>Ä<c3>ÄÄ<c2>Ä<c1>ÄÄÄÄ<c2>ÄÄÄ<c1>ÄÄÄ<c3>ÄÄÿÄ<c4>Ä<c3>Ä<C1>ÄÄ<c2>ÄÄÿÄÿ<c3>Ä))) 
  unset %:::who 
  linesep
}
