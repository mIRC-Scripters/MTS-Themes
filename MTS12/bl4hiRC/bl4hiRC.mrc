;Script Theme bl4hiRC
alias null { halt }
Raw 401:*:{ echo -a  11•0 $2 isn´t on iRC . }
on *:nick:{ if ($nick == $me) { echo -s 11• Your nick is now $newnick } }
Raw 318:*:{ echo -a 9- }
Raw 404:*:{ echo $active 11•0 You can´t send text to channel. }
alias load { clear | %:echo 11• B9l4hiRC T9heme L9o@ded. | %:echo -  | %:echo Theme Information: | %:echo - Author: CaR[T]MaN (carttman@hotmail.com) | %:echo - Name: bl4hiRC | %:echo - Description: A blue theme made for my script. | %:echo - Site: http://www.freewebz.com/bl4hirc }
alias raw311 { %:echo 9- | %:echo 11•0 Now starting whois on %::nick | %:echo 11•0 Hostmask : %::nick ( $+ %::address $+ ) - RealName : %::realname }
