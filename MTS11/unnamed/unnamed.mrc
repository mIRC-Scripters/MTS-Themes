alias _some.whois {
  %:echo %::pre whois on00 %::nick 
  %:echo %::pre 00 $+ %::nick 15is (00 $+ %::address $+ 15) * 00 $+ %::realname
}
alias _some.wchans %:echo %::pre 13 $+ %::nick 15on 00 $+ %::chan 15 $+ (00 $+ $comchan(%::nick,0) common15)
alias _some.widle %:echo %::pre 13 $+ %::nick 15has been idle 00 $+ $duration(%::idletime) | %:echo %::pre 13 $+ %::nick 15connected 00 $+ %::signontime 15(00 $+ $duration($calc($ctime - $ctime(%::signontime))) $+ 15)
alias _some.load {
  echo -a %::pre 00unnamed15 theme loaded
  echo -a %::pre 15made by 00Tig0ti
  echo -a %::pre 15email: 00admin@tig0ti.org 15website:00 http://fractalscript.com
  echo -a %::pre 15/unnamedtheme00 to say what you are using
}
alias unnamedtheme describe $active using unnamed 2.0 mts theme.
alias _some.names {
  if (%::chan != %some.nameschan) {
    %:echo %::pre names (0 $+ %::chan $+ )
    %some.nameschan = %::chan
  }
  tokenize 32 $gettok(%::text,2-,32)
  var %i = 1,%x = 4
  while ($gettok($1-,$+(%i,-,%x),32)) {  %:echo $_some.n($ifmatch) | inc %i %x | inc %x %x }
  unset %some.nameschan
}
alias _some.n tokenize 32 $1- | return $_some.pr $str($chr(160),2) $+ 15[00 $+ $1 $+ 15]00 $+ $str($chr(160),$calc(10 - $len($1))) $+ 14 · 00 $+ 15[00 $+ $2 $+ 15]00 $+ $str($chr(160),$calc(10 - $len($2))) $+ 14 · 00 15[00 $+ $3 $+ 15]00 $+ $str($chr(160),$calc(10 - $len($3))) $+ 14 · 00 $+ 15[00 $+ $4 $+ 15]00 $+ $str($chr(160),$calc(10 - $len($4)))
alias _some.pr return 15 ×
