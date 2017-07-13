alias whois.ircl {
  %:echo 1::.:::.:::.:::.:::.:::.:::4 Whois on14 %::nick 1::.:::.:::.:::.:::.:::.:::
  %:echo 1:4 Addreess :14 %::address
  %:echo 1:4 Real Name :14 %::realname
}
alias chan.ircl { %:echo 1:4 Channels :14 %::chan }
alias away.ircl { %:echo 1:4 Away :14 %::text }
alias idle.ircl { %:echo 1:4 Idle Time :14 $duration(%::idletime) }
