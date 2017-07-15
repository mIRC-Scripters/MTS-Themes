alias _some.whois {
  %:echo %::pre 11-----(00 %::nick 11)-------------------------
  %:echo %::pre 11 $+ %::nick 15is (00 $+ %::address $+ 15) * 00 $+ %::realname
}
alias _some.wchans %:echo %::pre 11 $+ %::nick 15on 00 $+ %::chan 15 $+ (00 $+ $comchan(%::nick,0) 15common)
alias _some.widle %:echo %::pre 11 $+ %::nick 15has been idle 00 $+ $duration(%::idletime) | %:echo %::pre 11 $+ %::nick 15connected 00 $+ %::signontime 15(00 $+ $duration($calc($ctime - $ctime(%::signontime))) $+ 15)
alias _some.load {
  echo -a %::pre 00Viagra215 theme loaded
  echo -a %::pre 15Made by 00Kiu_man
  echo -a %::pre 15Email: 00kiuman@kiuman.com.ar 15Website:00 http://www.kiuman.com.ar
echo -a %::pre 15Type 00/themes 15to change the theme
}
