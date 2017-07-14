[mts]
; Theme information
Name Mnirc 2.0
MTSVersion 1.1
Version 1.1
Author Mpdreamz
EMail Mpdreamz@mynapster.com
Website irc://irc.mynapster.com
Description Mnirc theme
Colors 00,01,01,00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,14
RGBColors 255,255,255 0,0,0 66,33,0 221,111,0 255,181,106 0,50,100 80,130,180 60,160,255 43,85,65 63,134,103 148,201,175 137,1,1 243,1,1 254,137,137 90,97,115 239,241,241
 
Prefix 8»9»10»
Mode 5»6»7» 1 <nick> sets mode : <modes>
 
ModeUser 5»6»7» 1 <me> sets mode : <modes>
Join <pre> 8Join: 1<nick>  ( <address> )
 
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
 
JoinSelf 5»6»7» 1 Entered <chan>
Part 11»12»13» 11Part: 1<nick>  ( <address> )
Kick 11»12»13» 11Kick: 1<knick> was kicked by <nick> : <text>
KickSelf 1 You were kicked from <channel> by <nick>
Quit 11»12»13» 11Quit: 1<nick> : <text>
Topic 5»6»7» 1 <nick> changed the topic to : <text>
Nick 5»6»7» 1<nick> is now known as <newnick>
NickSelf 1 You are now known as : <newnick>
Invite 1 <nick> invited you to <chan>
ServerError 12 ERROR! : <text>
Rejoin 1 trying to rejoin <chan> ....
Ctcp 2»3»4» 1<nick> wants to know your 4<ctcp>
CtcpChan 2»3»4» 1<nick> wants to know your 4<ctcp>
CtcpSelf 2»3»4» 1Recieving <nick> 's 2<ctcp>
CtcpChanSelf 2»3»4» 1Recieving <nick> <chan> `s 2<ctcp>
CtcpReply 2»3»4» 1<nick> 's 2<ctcp>1:<text>
CtcpReplySelf 2»3»4» 1<nick> 's 2<ctcp>1:<text>
RAW.001 2»3»4» 2Welcome to Mnirc
RAW.003 2»3»4» 2 Creation date : <value>
RAW.005 2»3»4» 2Protocols : <text>
RAW.221 2»3»4» 2 Current Usermode :  <nick> <modes>
RAW.250 2»3»4» 2 Connections : <value>
RAW.251 2»3»4»2 Users , invisible, servers :  <users>, <text>, <value>
RAW.252 2»3»4» 2 <value>  Operators online
RAW.254 2»3»4» 2 <value>  Channels running!
RAW.265 2»3»4» 2Local users  <users> Max: <value>
RAW.315 1End of /who <value>
RAW.324 1<chan> : <modes>
RAW.332 1<chan> : <text>
RAW.333 1Topic by <nick> : <text>
RAW.341 1Invited <nick> to <chan>
RAW.353 1
RAW.366 1
RAW.401 1 No such Nickname : <nick>
RAW.403 1 No such Channel : <chan>
RAW.404 1
RAW.421 1 /<value> is not a valid command in Mnirc
RAW.432 1 Invalid Nickname : <nick>
RAW.433 1Nickname already in use <nick>
RAW.471 1Channel is too crowded : <chan>
RAW.473 1Invites Only : <chan>
RAW.474 1Banned from channel : <chan>
RAW.475 1Key required : <chan>
RAW.482 1 You dont have the required power in <chan>
RAW.002 2»3»4» 2<server> <value>
RAW.253 2»3»4» 2 <value>  Unknown connections
RAW.266 2»3»4» 2Global users  <users> Max: <value>
RAW.352 3 [
RAW.311 2»3»4»3[2whois3] 1<nick> ( <address> )
RAW.319 2»3»4»3| 1 in <chan>
RAW.312 2»3»4»3| 1 on <wserver>, <serverinfo>
RAW.301 2»3»4»3| 1 is Away: <text>
RAW.307 2»3»4»3| 1 <isregd> a registered nick !
RAW.313 2»3»4»3| 1 <isoper> <operline>
RAW.317 2»3»4»3| 1 Idle : <idletime> Signed on : <signontime>
RAW.318 2»3»4»3[2End whois3] 1<nick>
RAW.372 1<text>
RAW.375 1MOTD
RAW.376 1 MOTD END
RAW.391 2»3»4» 2Server Time :  <text>
RAW.Other 2»3»4» 2<text>
Notice 5»6»7» 1<nick> : <text>
NoticeSelf 5»6»7» 1<nick> : <text>
NoticeSelfChan 5»6»7» 1<nick> : <text>
NoticeChan 5»6»7» 1<nick> : <text>
RAW.255 1
RAW.314 2»3»4»3[2whowas3] 1<nick> ( <address> )
RAW.369 2»3»4»3[2End whowass3] 1<nick>
 
CLineCharHOp 00%
CLineCharVoice 01+
 
CLineCharOwner 01.
CLineCharIrcOp 12[admin]
CLineCharOp 01@
TextChan 1<nick>141: <text>
TextChanSelf 1<me>141: <text>
ActionChan 14"1 <nick> <text> 14"
ActionChanSelf 14"1 <me> <text> 14"
TextQuerySelf 1<me>141: <text>
TextQuery 1<nick>141: <text>
ActionQuery 14 "1 <nick> <text> 14"
ActionQuerySelf 14" 1 <me> <text> 14"
 
Timestamp ON
TimestampFormat [HH:nn]
 
