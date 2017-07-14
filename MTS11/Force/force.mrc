alias whois_start {
  %:echo 14_________/ 1(2Whois on3 %::nick 1) 14\___________ 
  %:echo 14\ 2Address:3 %::address 
  %:echo 14\ 2Real Name:3 %::realname 
}

alias idle_start {
  %:echo 14\ 2Idle:3 $duration(%::idletime)
}
