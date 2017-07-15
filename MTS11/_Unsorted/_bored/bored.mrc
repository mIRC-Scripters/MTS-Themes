;bored MTS script file  (http://escripting.tk)
;by LeYeR                   (leyerpunk@tujefa.org)
alias t.b.whois {
  var %cc = $gettok(%::address, $numtok(%::address, 46), 46)
  %:echo 14Ú14Ä15úÄÄÄÄ15ÄÄÄÂÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
  ;if u have a a country hash\ini\txt put ur $id instead $_c
  %:echo 14³ $+ $_align(9, 00 $+ %::nick $+ ) $+ 14³ 11(10 $+ %::address $+ 11) 15< $+ $_c(%::nick) $+ 15>
  %:echo 14³ $+ $_align(9,11i10rcnam11e:) $+ 14³ %::realname 
  if (%::chan) { %:echo 14³ $+ $_align(9,11c10hannel11s:) $+ 14³ $_br(%::chan) }
  if (%::text) { %:echo 14³ $+ $_align(9,11a10wa11y:) $+ 14³ %::text }
  %:echo 14³ $+ $_align(9,11s10erve11r:) $+ 14³ %::wserver $iif(%::serverinfo,15< $+ %::serverinfo $+ 15>)
  if (%::idletime) { %:echo 14³ $+ $_align(9,11i10dl11e:) $+ 14³ %::idletime }
  if (%::signontime) { %:echo 14³ $+ $_align(9,11l10ogge11d:) $+ 14³ %::signontime }
  %:echo 14À14Ä15úÄÄÄÄ15ÄÄÄÁÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
}
alias _align { return $2- $+ $str( ,$calc($1 - $len($strip($2-)))) }
alias t.b.whowas {
  var %cc = $gettok(%::address, $numtok(%::address, 46), 46)
  %:echo 14Ú14Ä15úÄÄÄÄ15ÄÄÄÂÄÄÄ15ÄÄÄÄÄÄÄÄÄÄÄÄÄÄ15ÄÄÄÄÄÄÄÄÄÄÄ15ÄÄÄÄÄ15ÄÄÄÄÄÄ
  %:echo 14³ $+ $_align(9,15 $+ %::nick $+ ) $+ 14³ 11(10 $+ %::address $+ 11) 15< $+ $_c(%::nick) $+ 15>
  %:echo 14³ $+ $_align(9,11i10rcnam11e:) $+ 14³ %::realname
  %:echo 14³ $+ $_align(9,11s10erve11r:) $+ 14³ %::wserver $iif(%::serverinfo,15< $+ %::serverinfo $+ 15>)
  %:echo 14À14Ä15úÄÄÄÄ15ÄÄÄÁÄÄÄ15ÄÄÄÄÄÄÄÄÄÄ15ÄÄÄÄÄÄÄÄÄ15ÄÄÄÄÄÄÄÄ15ÄÄÄÄ15ÄÄÄÄÄ
}
alias -l _br return $replace($1-,@,15@,+,15+)
