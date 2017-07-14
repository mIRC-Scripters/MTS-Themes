alias default.whoisinit {
  %:echo 15·······················6······················8························
  %:echo 15| 7 $+ $1 $+  0[15 $+ $2 $+ 0]
  %:echo 15|. 06name: $3-
}
alias default.whoisidle {
  %:echo 15|. 06idle: $duration($1) ( $+ $2- $+ )
}
alias default.whoisend {
  %:echo 15·······················6······················8·····0[6End of /whois0]
