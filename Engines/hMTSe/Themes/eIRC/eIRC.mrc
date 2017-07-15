alias default.whoisinit {
  %:echo .....[02whois on $1 $+ ]......14...1.14....1.14.....15.14...15....14.15...14.15.. ... ... .
  %:echo 15: 02Name: $3-
  %:echo 15: 02Address: $2
}
alias default.whoisidle {
  %:echo 1: 02Idle: $duration($1)
  %:echo 1: 02Sign on: $2-
}
alias default.whoisend {
  %:echo 1:15. ....14.15 ...14.15.14.....15.14..1.14......1.14....1...14.1...................[02eIRC $ver $+ ]............
}
alias default.unknowncommand %:echo $theme.setting(prefix) Unknown command: $1-
alias default.lusersinit {
  %:echo .....[02Lusers].................14...1.14....1.14.....15.14...15....14.15...14.15.. ... ... .
  %:echo 15: 02Users: $1 02Invisible: $2 02Servers: $3
}
alias default.lusersend {
  %:echo 1: 02Clients: $1 02Servers: $2
  %:echo 1:15. .. ..14.15 ...14.15.14.....15.14.....1.14......1.14....1................[02eIRC $ver $+ ]............
}
