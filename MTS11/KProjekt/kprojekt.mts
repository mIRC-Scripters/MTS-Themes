[mts]
Name kprojekt
MTSVERSION 1.1
VERSION 1.1
AUTHOR Kryminal
EMAIL kryminalist@hotmail.com
DESCRIPTION Main theme of my script. It's not my first one but it's the first I released.
SCRIPT kprojekt.mrc
WEBSITE none yet
Prefix `°´
Load <pre> 14Kryminalistik0\15Projekt: 0Load Successfull.
Unload <pre> 14Kryminalistik0\15Projekt: 0Unload Successfull.
Timestamp ON
TimestampFormat <c3>[<c2>HH:nn<c3>]

Scheme1 Green
Scheme2 Blue
Scheme3 Dark Red
Scheme4 Orange
Scheme5 Arial Green
Scheme6 Arial Blue
Scheme7 Arial Dark Red
Scheme8 Arial Orange

BaseColors 11,14,00,02
Colors 01,00,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,01,00,01,0,0
RGBColors 255,255,255 0,0,0 30,60,100 0,144,0 255,0,0 128,0,0 116,139,119 255,128,0 255,255,0 0,255,0 0,144,144 100,180,220 69,197,37 67,89,167 128,128,128 208,208,208

Join <pre> 14(15<nick>14,<address>14, has just entered <chan>.14))
JoinSelf <pre> 14(15Now entering <chan>.14)
Quit <pre> 14(15SingOff:0 <nick> / <address> / 0<text>14)
Part <pre> 14(15Part:0 <nick> / <address> / 0<text>14)
Nick <pre> 14(15Nick:0 <nick> / <newnick>14)
NickSelf <pre> 14(15Nick:0 <nick> / <newnick>14)
Topic <pre> 14(15Topic:0 <nick> changed topic of <chan> to 15<text>14)
Mode <pre> 14(15ChanMode:0 <nick> changed modes of <chan> to <modes>14)
INVITE <pre> 14(15Invite:0 <nick> invited you to join <chan>.14)
Kick <pre> 14(15Kick:0 <knick> have been kicked out of <chan> by <nick>. 6(0<text>6)14)
KickSelf <pre> 14(15Kick:0 You've been kicked out of <chan> by <nick>.6(0<text>6)14)
ModeUser <pre> 14(15+/-:0 <nick> sets modes <modes>14)
TextQuery  15(14<cmode>0<nick>15) <text>
TextQuerySelf 14(15<cmode>0<me>14) <text>
TextChan 15(14<cmode>0<nick>15) <text>
TextChanSelf 14(15<cmode>0<me>14)14 <text>
ActionChan `°´ 6 <cmode><nick> <text>
ActionChanSelf `°´ 6 <cmode><me> <text>
Notify <pre> 14(15Notify:0 <nick> is now online. 6(0<text>6)14)
UNotify <pre> 14(15Notify:0 <nick> is now offline. 6(0<text>6)14)
NoticeChan <pre> 14(15Notice/<chan>:0 <nick>: 6(0<text>6)14)
Notice <pre> 14(15Notice/<nick>: 6(0<text>6)14)

raw.252 <pre> 4Operators online :3 <value>
raw.254 <pre> 4Channels :0 <value>
raw.265 <pre> 4Locals users :0 <users> 
raw.315 <pre> 4End of 0/who 11for 3<value>
raw.375 <pre> 4Mesage of the day
raw.376 <pre> 4End of0 /motd
raw.432 <pre> 0<nick> 4: Erroneus Nickname
raw.433 <pre> 0<nick> 4: nick already in use
raw.441 <pre> 0<nick> 4: is not on 0<chan>
raw.442 <pre> 4You're not on 0<chan>
raw.443 <pre> 0<nick> 4: is already on 0<chan>
raw.332 <pre> 14Topic: 0<text>
raw.333 <pre> 14Topic set by:0 <nick> 
raw.311 !script whois_grey
raw.319 14| 15Work Area:0 <chan>
raw.312 !script serv_grey
raw.301 14| 15Away:0 <text>
raw.317 !script idle_grey <idletime>
raw.318 14|______________15[0WHOIS15]14_____________  

CLineOwner 2
CLineOP 14
CLineHOP 14
CLineVoice 15
CLineMe 11
ClineRegular 0

ClineCharOwner 1
ClineCharOP 9
ClineCharHOP 2%
ClineCharVoice 9

FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11

[Scheme1]

Join <pre> 6(15<nick>6,<address>6, has just entered <chan>.6))
JoinSelf <pre> 6(15Now entering <chan>.6)
Quit <pre> 6(15SingOff:0 <nick> / <address> / 0<text>6)
Part <pre> 6(15Part:0 <nick> / <address> / 0<text>6)
Nick <pre> 6(15Nick:0 <nick> / <newnick>6)
NickSelf <pre> 6(15Nick:0 <nick> / <newnick>6)
Topic <pre> 6(15Topic:0 <nick> changed topic of <chan> to 15<text>6)
Mode <pre> 6(15ChanMode:0 <nick> changed modes of <chan> to <modes>6)
INVITE <pre> 6(15Invite:0 <nick> invited you to join <chan>.6)
Kick <pre> 6(15Kick:0 <knick> have been kicked out of <chan> by <nick>. 14(0<text>14)6)
KickSelf <pre> 6(15Kick:0 You've been kicked out of <chan> by <nick>.14(0<text>14)6)
ModeUser <pre> 6(15+/-:0 <nick> sets modes <modes>6)
TextQuery  15(6<cmode>0<nick>15) <text>
TextQuerySelf 6(15<cmode>0<me>6) <text>
TextChan 15(6<cmode>0<nick>15) <text>
TextChanSelf 6(15<cmode>0<me>6)6 <text>
ActionChan `°´ 6 <cmode><nick> <text>
ActionChanSelf `°´ 6 <cmode><me> <text>
Notify <pre> 6(15Notify:0 <nick> is now online. 14(0<text>14)6)
UNotify <pre> 6(15Notify:0 <nick> is now offline. 14(0<text>14)6)
NoticeChan <pre> 6(15Notice/<chan>:0 <nick>: 14(0<text>14)6)
Notice <pre> 6(15Notice/<nick>: 14(0<text>14)6)

raw.311 !script whois_green
raw.319 6| 15Work Area:0 <chan>
raw.312 !script serv_green
raw.301 6| 15Away:0 <text>
raw.317 !script idle_green <idletime>
raw.318 6|______________15[0WHOIS15]6_____________  

[Scheme2]

Join <pre> 2(15<nick>2,<address>2, has just entered <chan>.2))
JoinSelf <pre> 2(15Now entering <chan>.2)
Quit <pre> 2(15SingOff:0 <nick> / <address> / 0<text>2)
Part <pre> 2(15Part:0 <nick> / <address> / 0<text>2)
Nick <pre> 2(15Nick:0 <nick> / <newnick>2)
NickSelf <pre> 2(15Nick:0 <nick> / <newnick>2)
Topic <pre> 2(15Topic:0 <nick> changed topic of <chan> to 15<text>2)
Mode <pre> 2(15ChanMode:0 <nick> changed modes of <chan> to <modes>2)
INVITE <pre> 2(15Invite:0 <nick> invited you to join <chan>.2)
Kick <pre> 2(15Kick:0 <knick> have been kicked out of <chan> by <nick>. 14(0<text>14)2)
KickSelf <pre> 2(15Kick:0 You've been kicked out of <chan> by <nick>.14(0<text>14)2)
ModeUser <pre> 2(15+/-:0 <nick> sets modes <modes>2)
TextQuery  15(2<cmode>0<nick>15) <text>
TextQuerySelf 2(15<cmode>0<me>11) <text>
TextChan 15(2<cmode>0<nick>15) <text>
TextChanSelf 2(15<cmode>0<me>2)11 <text>
ActionChan `°´ 2 <cmode><nick> <text>
ActionChanSelf `°´ 2 <cmode><me> <text>
Notify <pre> 2(15Notify:0 <nick> is now online. 14(0<text>14)2)
UNotify <pre> 2(15Notify:0 <nick> is now offline. 14(0<text>14)2)
NoticeChan <pre> 2(15Notice/<chan>:0 <nick>: 14(0<text>14)2)
Notice <pre> 2(15Notice/<nick>: 14(0<text>14)2)

raw.311 !script whois_blue
raw.319 2| 15Work Area:0 <chan>
raw.312 !script serv_blue
raw.301 2| 15Away:0 <text>
raw.317 !script idle_blue <idletime>
raw.318 2|______________15[0WHOIS15]2_____________  

[Scheme3]

Join <pre> 5(15<nick>5,<address>5, has just entered <chan>.5))
JoinSelf <pre> 5(15Now entering <chan>.5)
Quit <pre> 5(15SingOff:0 <nick> / <address> / 0<text>5)
Part <pre> 5(15Part:0 <nick> / <address> / 0<text>5)
Nick <pre> 5(15Nick:0 <nick> / <newnick>5)
NickSelf <pre> 5(15Nick:0 <nick> / <newnick>5)
Topic <pre> 5(15Topic:0 <nick> changed topic of <chan> to 15<text>5)
Mode <pre> 5(15ChanMode:0 <nick> changed modes of <chan> to <modes>5)
INVITE <pre> 5(15Invite:0 <nick> invited you to join <chan>.5)
Kick <pre> 5(15Kick:0 <knick> have been kicked out of <chan> by <nick>. 14(0<text>14)5)
KickSelf <pre> 5(15Kick:0 You've been kicked out of <chan> by <nick>.14(0<text>14)5)
ModeUser <pre> 5(15+/-:0 <nick> sets modes <modes>5)
TextQuery  15(5<cmode>0<nick>15) <text>
TextQuerySelf 5(15<cmode>0<me>5) <text>
TextChan 15(5<cmode>0<nick>15) <text>
TextChanSelf 5(15<cmode>0<me>5)5 <text>
ActionChan `°´ 5 <cmode><nick> <text>
ActionChanSelf `°´ 5 <cmode><me> <text>
Notify <pre> 5(15Notify:0 <nick> is now online. 14(0<text>14)5)
UNotify <pre> 5(15Notify:0 <nick> is now offline. 14(0<text>14)5)
NoticeChan <pre> 5(15Notice/<chan>:0 <nick>: 14(0<text>14)5)
Notice <pre> 5(15Notice/<nick>: 14(0<text>14)5)

raw.311 !script whois_red
raw.319 5| 15Work Area:0 <chan>
raw.312 !script serv_red
raw.301 5| 15Away:0 <text>
raw.317 !script idle_red <idletime>
raw.318 5|______________15[0WHOIS15]5_____________  

[Scheme4]

Join <pre> 7(15<nick>7,<address>7, has just entered <chan>.7))
JoinSelf <pre> 7(15Now entering <chan>.7)
Quit <pre> 7(15SingOff:0 <nick> / <address> / 0<text>7)
Part <pre> 7(15Part:0 <nick> / <address> / 0<text>7)
Nick <pre> 7(15Nick:0 <nick> / <newnick>7)
NickSelf <pre> 7(15Nick:0 <nick> / <newnick>7)
Topic <pre> 7(15Topic:0 <nick> changed topic of <chan> to 15<text>7)
Mode <pre> 7(15ChanMode:0 <nick> changed modes of <chan> to <modes>7)
INVITE <pre> 7(15Invite:0 <nick> invited you to join <chan>.7)
Kick <pre> 7(15Kick:0 <knick> have been kicked out of <chan> by <nick>. 14(0<text>14)7)
KickSelf <pre> 7(15Kick:0 You've been kicked out of <chan> by <nick>.14(0<text>14)7)
ModeUser <pre> 7(15+/-:0 <nick> sets modes <modes>7)
TextQuery  15(7<cmode>0<nick>15) <text>
TextQuerySelf 7(15<cmode>0<me>7) <text>
TextChan 15(7<cmode>0<nick>15) <text>
TextChanSelf 7(15<cmode>0<me>7)7 <text>
ActionChan `°´ 7 <cmode><nick> <text>
ActionChanSelf `°´ 7 <cmode><me> <text>
Notify <pre> 7(15Notify:0 <nick> is now online. 14(0<text>14)7)
UNotify <pre> 7(15Notify:0 <nick> is now offline. 14(0<text>14)7)
NoticeChan <pre> 7(15Notice/<chan>:0 <nick>: 14(0<text>14)7)
Notice <pre> 7(15Notice/<nick>: 14(0<text>14)7)

raw.311 !script whois_or
raw.319 7| 15Work Area:0 <chan>
raw.312 !script serv_or
raw.301 7| 15Away:0 <text>
raw.317 !script idle_or <idletime>
raw.318 7|______________15[0WHOIS15]7_____________  

[Scheme5]

Join <pre> 6(15<nick>6,<address>6, has just entered <chan>.6))
JoinSelf <pre> 6(15Now entering <chan>.6)
Quit <pre> 6(15SingOff:0 <nick> / <address> / 0<text>6)
Part <pre> 6(15Part:0 <nick> / <address> / 0<text>6)
Nick <pre> 6(15Nick:0 <nick> / <newnick>6)
NickSelf <pre> 6(15Nick:0 <nick> / <newnick>6)
Topic <pre> 6(15Topic:0 <nick> changed topic of <chan> to 15<text>6)
Mode <pre> 6(15ChanMode:0 <nick> changed modes of <chan> to <modes>6)
INVITE <pre> 6(15Invite:0 <nick> invited you to join <chan>.6)
Kick <pre> 6(15Kick:0 <knick> have been kicked out of <chan> by <nick>. 14(0<text>14)6)
KickSelf <pre> 6(15Kick:0 You've been kicked out of <chan> by <nick>.14(0<text>14)6)
ModeUser <pre> 6(15+/-:0 <nick> sets modes <modes>6)
TextQuery  15(6<cmode>0<nick>15) <text>
TextQuerySelf 6(15<cmode>0<me>6) <text>
TextChan 15(6<cmode>0<nick>15) <text>
TextChanSelf 6(15<cmode>0<me>6)6 <text>
ActionChan `°´ 6 <cmode><nick> <text>
ActionChanSelf `°´ 6 <cmode><me> <text>
Notify <pre> 6(15Notify:0 <nick> is now online. 14(0<text>14)6)
UNotify <pre> 6(15Notify:0 <nick> is now offline. 14(0<text>14)6)
NoticeChan <pre> 6(15Notice/<chan>:0 <nick>: 14(0<text>14)6)
Notice <pre> 6(15Notice/<nick>: 14(0<text>14)6)

raw.311 !script whois_green
raw.319 6| 15Work Area:0 <chan>
raw.312 !script serv_green
raw.301 6| 15Away:0 <text>
raw.317 !script idle_green <idletime>
raw.318 6|______________15[0WHOIS15]6_____________  

FontDefault Arial,10
FontQuery Arial,10
FontChan Arial,10

[Scheme6]

Join <pre> 2(15<nick>2,<address>2, has just entered <chan>.2))
JoinSelf <pre> 2(15Now entering <chan>.2)
Quit <pre> 2(15SingOff:0 <nick> / <address> / 0<text>2)
Part <pre> 2(15Part:0 <nick> / <address> / 0<text>2)
Nick <pre> 2(15Nick:0 <nick> / <newnick>2)
NickSelf <pre> 2(15Nick:0 <nick> / <newnick>2)
Topic <pre> 2(15Topic:0 <nick> changed topic of <chan> to 15<text>2)
Mode <pre> 2(15ChanMode:0 <nick> changed modes of <chan> to <modes>2)
INVITE <pre> 2(15Invite:0 <nick> invited you to join <chan>.2)
Kick <pre> 2(15Kick:0 <knick> have been kicked out of <chan> by <nick>. 14(0<text>14)2)
KickSelf <pre> 2(15Kick:0 You've been kicked out of <chan> by <nick>.14(0<text>14)2)
ModeUser <pre> 2(15+/-:0 <nick> sets modes <modes>2)
TextQuery  15(2<cmode>0<nick>15) <text>
TextQuerySelf 2(15<cmode>0<me>11) <text>
TextChan 15(2<cmode>0<nick>15) <text>
TextChanSelf 2(15<cmode>0<me>2)11 <text>
ActionChan `°´ 2 <cmode><nick> <text>
ActionChanSelf `°´ 2 <cmode><me> <text>
Notify <pre> 2(15Notify:0 <nick> is now online. 14(0<text>14)2)
UNotify <pre> 2(15Notify:0 <nick> is now offline. 14(0<text>14)2)
NoticeChan <pre> 2(15Notice/<chan>:0 <nick>: 14(0<text>14)2)
Notice <pre> 2(15Notice/<nick>: 14(0<text>14)2)

raw.311 !script whois_blue
raw.319 2| 15Work Area:0 <chan>
raw.312 !script serv_blue
raw.301 2| 15Away:0 <text>
raw.317 !script idle_blue <idletime>
raw.318 2|______________15[0WHOIS15]2_____________  

FontDefault Arial,10
FontQuery Arial,10
FontChan Arial,10

[Scheme7]

Join <pre> 5(15<nick>5,<address>5, has just entered <chan>.5))
JoinSelf <pre> 5(15Now entering <chan>.5)
Quit <pre> 5(15SingOff:0 <nick> / <address> / 0<text>5)
Part <pre> 5(15Part:0 <nick> / <address> / 0<text>5)
Nick <pre> 5(15Nick:0 <nick> / <newnick>5)
NickSelf <pre> 5(15Nick:0 <nick> / <newnick>5)
Topic <pre> 5(15Topic:0 <nick> changed topic of <chan> to 15<text>5)
Mode <pre> 5(15ChanMode:0 <nick> changed modes of <chan> to <modes>5)
INVITE <pre> 5(15Invite:0 <nick> invited you to join <chan>.5)
Kick <pre> 5(15Kick:0 <knick> have been kicked out of <chan> by <nick>. 14(0<text>14)5)
KickSelf <pre> 5(15Kick:0 You've been kicked out of <chan> by <nick>.14(0<text>14)5)
ModeUser <pre> 5(15+/-:0 <nick> sets modes <modes>5)
TextQuery  15(5<cmode>0<nick>15) <text>
TextQuerySelf 5(15<cmode>0<me>5) <text>
TextChan 15(5<cmode>0<nick>15) <text>
TextChanSelf 5(15<cmode>0<me>5)5 <text>
ActionChan `°´ 5 <cmode><nick> <text>
ActionChanSelf `°´ 5 <cmode><me> <text>
Notify <pre> 5(15Notify:0 <nick> is now online. 14(0<text>14)5)
UNotify <pre> 5(15Notify:0 <nick> is now offline. 14(0<text>14)5)
NoticeChan <pre> 5(15Notice/<chan>:0 <nick>: 14(0<text>14)5)
Notice <pre> 5(15Notice/<nick>: 14(0<text>14)5)

raw.311 !script whois_red
raw.319 5| 15Work Area:0 <chan>
raw.312 !script serv_red
raw.301 5| 15Away:0 <text>
raw.317 !script idle_red <idletime>
raw.318 5|______________15[0WHOIS15]5_____________  

FontDefault Arial,10
FontQuery Arial,10
FontChan Arial,10

[Scheme8]

Join <pre> 7(15<nick>7,<address>7, has just entered <chan>.7))
JoinSelf <pre> 7(15Now entering <chan>.7)
Quit <pre> 7(15SingOff:0 <nick> / <address> / 0<text>7)
Part <pre> 7(15Part:0 <nick> / <address> / 0<text>7)
Nick <pre> 7(15Nick:0 <nick> / <newnick>7)
NickSelf <pre> 7(15Nick:0 <nick> / <newnick>7)
Topic <pre> 7(15Topic:0 <nick> changed topic of <chan> to 15<text>7)
Mode <pre> 7(15ChanMode:0 <nick> changed modes of <chan> to <modes>7)
INVITE <pre> 7(15Invite:0 <nick> invited you to join <chan>.7)
Kick <pre> 7(15Kick:0 <knick> have been kicked out of <chan> by <nick>. 14(0<text>14)7)
KickSelf <pre> 7(15Kick:0 You've been kicked out of <chan> by <nick>.14(0<text>14)7)
ModeUser <pre> 7(15+/-:0 <nick> sets modes <modes>7)
TextQuery  15(7<cmode>0<nick>15) <text>
TextQuerySelf 7(15<cmode>0<me>7) <text>
TextChan 15(7<cmode>0<nick>15) <text>
TextChanSelf 7(15<cmode>0<me>7)7 <text>
ActionChan `°´ 7 <cmode><nick> <text>
ActionChanSelf `°´ 7 <cmode><me> <text>
Notify <pre> 7(15Notify:0 <nick> is now online. 14(0<text>14)7)
UNotify <pre> 7(15Notify:0 <nick> is now offline. 14(0<text>14)7)
NoticeChan <pre> 7(15Notice/<chan>:0 <nick>: 14(0<text>14)7)
Notice <pre> 7(15Notice/<nick>: 14(0<text>14)7)

raw.311 !script whois_or
raw.319 7| 15Work Area:0 <chan>
raw.312 !script serv_or
raw.301 7| 15Away:0 <text>
raw.317 !script idle_or <idletime>
raw.318 7|______________15[0WHOIS15]7_____________  

FontDefault Arial,10
FontQuery Arial,10
FontChan Arial,10