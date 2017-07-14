[mts]
Name         Conservative
Author       Easy
EMail        vp_razor@gmx.net
Description  simple theme with rather conservative colors and formats, well readable
Version      0.1
MTSVersion   1.1
Script       cons.mrc

Colors       15,1,4,5,1,1,1,1,1,1,1,1,14,14,14,1,1,1,1,5,1,5,0,14,15,15
RGBColors    255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
BaseColors   1,4,13,14

CLineMe      0

FontDefault  Verdana,12
FontChan     Verdana,12
FontQuery    Verdana,12

Prefix          3(·i·)
ParenText       (<text>)
Timestamp       ON
TimestampFormat 14[HH:nn:ss]

;Channel Layouts
TextChan        <nick>: <text>
TextChanSelf    5<me>: <text>
ActionChan      • <nick> <text>
ActionChanSelf  5• <me> <text>

;Query Layouts
TextQuery       <nick>: <text>
TextQuerySelf   5<me>: <text>
ActionQuery     • <nick> <text>
ActionQuerySelf 5• <me> <text>

;Notice Layouts
Notice          <pre> 1notice « <nick>: <text>
NoticeSelf      <pre> 1notice » <nick>: <text>
NoticeChan      <pre> 1notice « <nick> » <chan>: <text>
NoticeSelfChan  <pre> 1notice » <chan>: <text>

;Message Layouts
TextMsg       <pre> 1msg « <nick>: <text>
TextMsgSelf   <pre> 1msg » <nick>: <text>

;Events Layout
Mode          <pre> 2Mode Change: <nick> sets mode(s) to <modes>
ModeUser      <pre> 2Usermode Change: You set your mode to <modes>
Join          <pre> 2Join: <nick> (<address>) enters the channel <chan>
JoinSelf      <pre> 2Join: You join the channel <chan>
Part          <pre> 2Part: <nick> (<address>) parts <chan>, saying "<text>"
Kick          <pre> 2Kick: <knick> was kicked by <nick> <parentext>
KickSelf      <pre> 2Kick: <nick> said "<text>" and showed you the door.
Quit          <pre> 2Quit: <nick> (<address>) leaves, saying "<text>"
Topic         <pre> 2Topic: <nick> changed the channel's topic to "<text>"
Nick          <pre> 2Nick: <nick> is now known as <newnick>
Nickself      <pre> 2Nick: <nick> is now known as <newnick>
Invite        <pre> 2Invitation: <nick> invites you to join <chan>
ServerError   4(·!·) 2ServerError: <text>
Rejoin        <pre> Rejoin: rejoining <chan>
Ctcp          <pre> 1ctcp « <nick>: <ctcp> <text>
CtcpChan      <pre> 1ctcp « <chan> « <nick>: <ctcp> <text>
CtcpSelf      <pre> 1ctcp » <nick>: <ctcp> <text>
CtcpChanSelf  <pre> 1ctcp » <chan>: <ctcp> <text>
CtcpReply     <pre> 1ctcp « <nick>: <ctcp> <text>
CtcpReplySelf <pre> 1ctcp » <nick><chan>: <ctcp> <text>
Notify        <pre> 2Notify: <nick> just went online <parentext>
Unnotify      <pre> 2Notify: <nick> just went offline <parentext>
Wallop        <pre> 2Wallop from <nick>: <text>
NoticeServer  <pre> 2Server Notice from <nick>: <text>

DNS           <pre> 2DNS: Looking up <address>
DNSError      4(·!·) 2DNS Error: Couldn't look up <address>
DNSResolve    <pre> 2DNS Resolved: <nick> / <address> resolved to <raddress>
Echo          3(·!·) <text>
EchoTarget    <pre> 2Echo (<target>): <text>
Error         4(·!·) 2Error: <text>
Load          <pre> "Conservative"-Theme loaded

Whois         !script cons.whois

RAW.Other     <pre> 1<text>
