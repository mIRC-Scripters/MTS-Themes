
alias NULL.whois {
  %:echo 4*
  %:echo 15*******************************4**
  %:echo 4* 	13performing Whois4>	**
  %:echo 15**
  var %cc = $gettok(%::address, $numtok(%::address, 46), 46)
  %:echo 15********************************************************************************4**
  ;if u have a a country hash\ini\txt put ur $id instead $_c
  %:echo 14 $+ $_align(9, 00 $+ %::nick $+ ) $+ 14³ 11(10 $+ %::address $+ 11) 15< $+ $_c(%::nick) $+ 15>
  ;%:notice $chan 14 $+ $_align(9, 0 $+ %::nick $+ ) $+ 14³ 11(10 $+ %::address $+ 11) 15< $+ $_c(%::nick) $+ 15>
  %:echo 14 $+ $_align(9,11i10rcnam11e:) $+ 14³ %::realname 
  if (%::chan) { %:echo 14 $+ $_align(9,11c10hannel11s:) $+ 14³ $_br(%::chan) }
  if (%::text) { %:echo 14 $+ $_align(9,11a10wa11y:) $+ 14³ %::text }
  %:echo 14 $+ $_align(9,11s10erve11r:) $+ 14³ %::wserver $iif(%::serverinfo,15< $+ %::serverinfo $+ 15>)
  if (%::idletime) { %:echo 14 $+ $_align(9,11i10dl11e:) $+ 14³ %::idletime }
  if (%::signontime) { %:echo 14 $+ $_align(9,11l10ogge11d:) $+ 14³ %::signontime }
  %:echo 15********************************************************************************4**
  %:echo 4**
  %:echo 4*  
}
{
alias _align { return $2- $+ $str( ,$calc($1 - $len($strip($2-)))) }
alias NULL.whowas {
  %:echo 4*
  %:echo 4**
  var %cc = $gettok(%::address, $numtok(%::address, 46), 46)
  %:echo 15********************************************************************************4**
  %:echo 15 $+ $_align(9,15 $+ %::nick $+ ) $+ 14³ 11(10 $+ %::address $+ 11) 15< $+ $_c(%::nick) $+ 15>
  %:echo 15 $+ $_align(9,11i10rcnam11e:) $+ 14³ %::realname
  %:echo 15 $+ $_align(9,11s10erve11r:) $+ 14³ %::wserver $iif(%::serverinfo,15< $+ %::serverinfo $+ 15>)
  %:echo 15********************************************************************************4**
  %:echo 4**	|
  %:echo 4*	|
}
{
alias NULL.topic {
  %:echo 4*
  %:echo 4**
  %:echo 15****4**
  var %cc = $gettok(%::topic)
  if (%::topic) { %:echo 14 $+ $_align(9,11Topic:) $+ 14³ %::text }
  %:echo 15****4**
  %:echo 4**
  %:echo 4*
}
{
{
alias NULL.names {
  %:echo 4*
  %:echo 4**
  %:echo 15****4**
  var %cc = $gettok(%::names)
  if (%::names) { %:echo 14 $+ $_align(9,11Names:) $+ 14³ %::text }
  %:echo 15****4**
  %:echo 4**
  %:echo 4*
}
