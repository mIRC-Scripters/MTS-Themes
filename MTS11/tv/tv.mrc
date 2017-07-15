;
;
; tunnelvision (mts theme)
;
;
alias tvsv {
  if (=* !iswm $active) && ($server == $null) { return }
  var %string = m $+ $version + tunnelvision(mts): everything dies
  if (=* iswm $active) || ($active ischan) || ($query($active)) { say %string }
  else { echo -ait $theme.setting(prefix) %string }
}
alias _tunnelvisionmts.whois {
  %:echo 14ÚÄÄÄÄÄÄÄ15Ä14Ä15ÄÄ14Ä15ÄÄÄ14Ä15ÄÄÄÄÄÄÄÄÄÄÄÄ16Ä15ÄÄ16ÄÄ15Ä16ÄÄÄ15Ä16ÄÄÄÄÄÄÄÄÄ Ä  Ä   Äúú  ú
  %:echo 14³11 $+ $_fillright(9, ,%::nick) $+ 14:15:16: 14[10 $+ %::address $+ 14]
  %:echo 14³11 $+ 13r6ealname 14:15:16:15 %::realname
  if (%::chan != $null) { %:echo 14³11 $+ 13c06hannels 14:15:16:15 $replace(%::chan,#,14#15,+,16+15,@,16@15) }
  if (%::wserver != $null) { %:echo 15³11 $+ 13s06erver   14:15:16:15 %::wserver < $+ %::serverinfo $+ > }
  if (%::away != $null) { %:echo 16³11 $+ 13a06waymsg  14:15:16:15 %::away }
  if (%::operline != $null) { %:echo 16³11 $+ 13o06perator 14:15:16:15 %::operline }

  ;;; DAMN IT KAMEK!
  ;;; "%::idletime     WHOIS- How long the user has been idle, in seconds."
  ;;; so why in the name of buddha are you doing this?: "set -u %::idletime $duration($hget(%h, IdleTime))"
  var %idletime = %::idletime
  if (%idletime !isnum) { %idletime = $duration(%idletime) }

  if (%idletime != $null) && (%::signontime != $null) { %:echo 16³11 $+ 13i06dletime 14:15:16:15 $_miniduration(%idletime) <signon $asctime($ctime(%::signontime),ddd mmm d HH:nn:ss yyyy) $+ > }
  %:echo 16À úúÄ  Ä ÄÄÄÄÄÄÄ15Ä16ÄÄÄ15Ä16ÄÄ15Ä16Ä15ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ14Ä15ÄÄ14Ä15ÄÄ14Ä15Ä14ÄÄÄ ÄÄÄ Ä
}
alias _tunnelvisionmts.whowas {
  %:echo 14ÚÄÄÄÄÄÄÄ15Ä14Ä15ÄÄ14Ä15ÄÄÄ14Ä15ÄÄÄÄÄÄÄÄÄÄÄÄ16Ä15ÄÄ16ÄÄ15Ä16ÄÄÄ15Ä16ÄÄÄÄÄÄÄÄÄ Ä  Ä   Äúú  ú
  %:echo 14³11 $+ $_fillright(9, ,%::nick) $+ 14:15:16: 14[10 $+ %::address $+ 14] (whowas)
  %:echo 14³11 $+ 13r6ealname 14:15:16:15 %::realname
  if (%::wserver != $null) { %:echo 15³11 $+ 13s06erver   14:15:16:15 %::wserver < $+ %::serverinfo $+ > }
  if (%::away != $null) { %:echo 16³11 $+ 13a06waymsg  14:15:16:15 %::away }
  %:echo 16À úúÄ  Ä ÄÄÄÄÄÄÄ15Ä16ÄÄÄ15Ä16ÄÄ15Ä16Ä15ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ14Ä15ÄÄ14Ä15ÄÄ14Ä15Ä14ÄÄÄ ÄÄÄ Ä
}
alias _tunnelvisionmts.names {
  var %file = $scriptdir $+ ~removethis.names. $+ $mkfn(%::chan) $+ .tmp,%text = %::text
  if ($left(%text,1) == $chr(35)) { %text = $gettok(%text,2-,32) }
  write " $+ %file $+ " $replace(%text,$chr(32),$lf)
}
alias _tunnelvisionmts.namesend {
  var %file = $scriptdir $+ ~removethis.names. $+ $mkfn(%::chan) $+ .tmp,%win = @__tunnelvisionmts_ $+ %::chan,%win2 = %win $+ ___,%o = 0,%t = 0,%i = 1,%string =    ,%nick,%l = 0
  close -@ %win %win2
  window -h %win
  window -h %win2
  loadbuf %win " $+ %file $+ "
  filter -wwc %win %win2 @*
  %o = $line(%win2,0)
  %t = $line(%win,0)
  var %b1 = %t users,%b2 = %o ops $+ $chr(44) $calc(%t - %o) nops
  %:echo     14ú  úúÄ Ä[13 %::chan 14]ÄÄ[ $+ $_shade(%b1,06,13,06) $+ 15]Ä16Ä15[ $+ $_shade(%b2,06,13,06) $+ 16]15Ä14Ä16[ $+ $_shade($asctime(hh:nntt),06,13,06) $+ 16]Ä Äúú   ú
  while (%i <= %t) {
    %nick = $line(%win,%i)
    if (@* iswm %nick) { %nick = 11@00 $+ $right(%nick,-1) }
    elseif (+* iswm %nick) { %nick = 11+00 $+ $right(%nick,-1) }
    else { %nick = 00 %nick }
    %string = %string $_fillright(13, ,%nick)
    if (5 // %i) {
      %:echo %string
      var %string =    ,%l = 0
    }
    inc %i
    inc %l
  }
  if (%l) { %:echo %string }
  close -@ %win %win2
  .remove " $+ %file $+ "
}
alias _tunnelvision.topicsetby { %:echo %::pre 00topic by00 %::nick 14[06 $+ $_shade(%::text,06,13,06) $+ 14] }
alias -l _shade {
  var %len = $len($1),%n = $int($calc(%len / 6)),%m
  if (%len > 2) && (%n == 0) { %n = 1 }
  %m = - $+ %n
  if (%len > 2) { return  $+ $2 $+ $left($1,%n) $+  $+ $3 $+ $left($right($1,%m),%m) $+  $+ $4 $+ $right($1,%n) }
  return  $+ $2 $+ $1
}
alias -l _fillright { return $3- $+ $str($2,$calc($1 - $len($strip($3-)))) }
alias -l _miniduration { return $remove($duration($1),$chr(32),ks,k,ays,ay,rs,r,ins,in,ecs,ec) }
