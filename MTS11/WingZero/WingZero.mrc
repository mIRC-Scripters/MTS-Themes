alias wz.whois {
  %:echo 0·15·14·------------------------------------·4.::14whois4::.14·--------------------------------------·15·0·
  %:echo 14· 14[nickname14]15 %::nick 
  %:echo 14· 14[address14]15 %::address 
  %:echo 14· 14[ircname14]15 %::realname 
}

alias wz.widle {
  %:echo 14· 14[idle14]15 $duration(%::idletime) 
  %:echo 14· 14[signon14]15 %::signontime $+ 
}

alias wz.rhois {
  %:echo 0·15·14·------------------------------------·4.::14whois4::.14·--------------------------------------·15·0·
  %:echo 14· 5[14nickname5]15 %::nick 
  %:echo 14· 5[14address5]15 %::address 
  %:echo 14· 5[14ircname5]15 %::realname 
}

alias wz.ridle {
  %:echo 14· 5[14idle5]15 $duration(%::idletime) 
  %:echo 14· 5[14signon5]15 %::signontime $+ 
}

alias wz.bhois {
  %:echo 1-----10:14Whois10:
  %:echo 10:14nick10:0 %::nick 
  %:echo 10:14host10:0  %::address 
  %:echo 10:14name10:0 13 %::realname 
}

alias wz.bidle {
  %:echo 10:14idle10:0 for $duration(%::idletime) 
  %:echo 10:14on10:0 since %::signontime $+
}

alias wz.hlhois {
  %:echo 7/\14 Info about Player:
  %:echo 7· 7[nickname7]14 %::nick 
  %:echo 7· 7[address7]14 %::address 
  %:echo 7· 7[ircname7]14 %::realname 
}

alias wz.hlidle {
  %:echo 7· 7[idle7]14 $duration(%::idletime) 
  %:echo 7· 7[signon7]14 %::signontime $+ 
}