alias ¯whois.start {
 %:echo |¯¯¯¯(15whois %::nick $+ )¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 %:echo $chr(124) 15address  : %::nick $+ ! $+ %::address
 %:echo $chr(124) 15ircname  : %::realname
}
alias ¯whois.chans {
  %i = 1
  while (%i <= $wrap(%::chan,$gettok($mtsget(fontdefault),1,44),$gettok($mtsget(fontdefault),2,44),270,0)) {
   %:echo $chr(124) 15channels : $wrap(%::chan,$gettok($mtsget(fontdefault),1,44),$gettok($mtsget(fontdefault),2,44),270,%i)
    inc %i
  }
  unset %i
}
alias ¯whois.away {
  %_aw = %::text
  %i = 1
  while (%i <= $wrap(%::text,$gettok($mtsget(fontdefault),1,44),$gettok($mtsget(fontdefault),2,44),270,0)) {
   %:echo $chr(124) 15away        : $wrap(%::text,$gettok($mtsget(fontdefault),1,44),$gettok($mtsget(fontdefault),2,44),270,%i)
    inc %i
  }
}
alias ¯whois.idle {
 %:echo $chr(124) 15idle           : $duration($1)
 %:echo $chr(124) 15signon      : $2-
}
