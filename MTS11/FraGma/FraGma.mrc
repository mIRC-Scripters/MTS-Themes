alias FGload %:echo 12 FraGma 3.0 MTS theme loaded

alias FGunload %:echo 12 FraGma 3.0 MTS theme unloaded

alias FGjoins {
  %:echo 12—————————————————————————————————————————————
  %:echo %::pre 12Joined %::chan $+ 
}

alias FGtopic {
  %:echo %::pre 12Topic:
  %:echo 12" $+ %::text $+ " 
}

alias FGtopic2 {
  %:echo %::pre 12Topic written by %::nick on %::text 
  %:echo 12———————————————————————————————————————————————————————————
}

alias FGwhois {
  %:echo 12—————————————————————————————————————————————
  %:echo %::pre 12 /Whois for %::nick [ $+ %::address $+ ]
  %:echo %::pre 
  %:echo %::pre 12 Realname: %::realname
}

alias FGwhois1 {
  %:echo %::pre 12 Status: %::nick is $iif(%::isregd != is,not) a registered nick.
}

alias FGwhois2 {
  %:echo %::pre 12 End of /Whois
  %:echo 12———————————————————————————————————————————————————————————
}

alias FGservt {
  %:echo 12—————————————————————————————————————————————
  %:echo %::pre 12 Users online: %::users [invisible: %::value $+ ]
}

alias FGservd {
  %:echo %::pre 12 Global users: %::users [max: %::value $+ ]
  %:echo 12———————————————————————————————————————————————————————————
}

alias FGwhowas {
  %:echo 12—————————————————————————————————————————————
  %:echo %::pre 12 /Whowas
  %:echo
  %:echo %::pre 12  $+ %::nick $+ [ $+ %::adress $+ ] is %::realname 
}

alias FGwhowas2 {
  %:echo %::pre 12 End of /Whowas to %::nick
  %:echo 12———————————————————————————————————————————————————————————
}
