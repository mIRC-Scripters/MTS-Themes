[mts]
Name Nature
Author HENNESSY
Email HennesScript@planet.nl
Description The colors of nature...
Version 0.52
MTSVersion 1.0
SCRIPT Nature.mrc
Load <pre> Nature theme loaded, get more at: http://HennesScript.cjb.net
Unload <pre> Nature theme unloaded
Colors 13,9,0,11,9,9,0,15,0,15,15,8,8,8,15,8,15,15,0,7,11,13,0,13,0,15 
Prefix <c1>:<c2>:<c3>:<c4>
Timestamp [HH:nn:ss]
ParenText <c3>[<text><c3>]
Mode <pre> <c3>~<c4>Mode<c2>~<c4> <nick> <c3>sets mode:<c4> <modes>
ModeUser <pre> <c3>~<c4>Mode<c3>~<c4> <nick> <c3>sets mode:<c4> <modes>
Join <pre> <c3>~<c4>Join<c3>~<c4> <nick> <c3>[<c4><address><c3>]
JoinSelf <pre> <c3>~<c4>Join<c3>~<c4> You joined: <chan>
Part <pre> <c3>~<c4>Part<c3>~<c4> <nick> <c3>[<c4><address><c3>] <parentext>
Kick <pre> <c3>~<c4>Kick<c3>~<c4> <knick> <c3>is kicked by<c4> <nick> <parentext>
KickSelf <pre> <c3>~<c4>Kick<c3>~<c4> You<c3> were kiced by<4> <nick> <c3>[<c4><address><c3>] from<c4> <chan> <parentext>
Quit <pre> <c3>~<c4>Quit<c3>~<c4> <nick> <c3>[<c4><address><c3>] <parentext>
Topic <pre> <c3>~<c4>Topic<c3>~<c4> <nick> <c3>sets a new topic: <text>
Nick <pre> <c3>~<c4>Nick<c3>~<c4> <nick> <c3>is now known as<c4> <newnick>
NickSelf <pre> <c3>~<c4>Nick<c3>~<c4> You <c3>are now known as<c4> <newnick>
Invite <pre> <c3>~<c4>Invite<c3>~<c4> <nick> <c3>invites you to join<4> <chan>
ServerError <pre> <c3>~<c4>Error<c3>~<c3> Error:<c4> <text>
Notice -<nick>- <text>
NoticeChan -<nick>:<chan>- <text>
NoticeSelf -<nick>- <text>
Rejoin <pre> <c3>~<c4>Rejoin<c3>~<c4> Rejoining <chan>...
TextChan 11(<c3><cmode>9<nick>11) <text>
TextChanSelf 11(<c3><cmode>9<me>11) <text>
ActionChan 9* <cmode><nick> <text>
ActionChanSelf 9* <cmode><me> <text>
DNS <pre> <c3>~<c4>DNS<c3>~<c3> Looking up<c4> <nick><address>
DNSError <pre> <c3>~<c4>DNS<c3>~<c3> Unable to resolve<c4> <nick><address>
DNSResolve <pre> <c3>~<c4>DNS<c3>~<c3> Resolved:<c4> <address> <c3>to<c4> <raddress>
TextQuery 11(9<nick>11) <text>
TextQuerySelf 11(9<me>11) <text>
ActionQuery 9* <nick> <text>
ActionQuerySelf *9 <me> <text>
TextMsg 11(9<nick>11) <text>
TextMsgSelf 11(9<me>11) -> <nick>: <text>
CTCP <pre> <c3>~<c4>CTCP<c3>~<c4> <nick> <c3>[<c4><address><c3>]<c4> <ctcp> : <text>
CTCPSelf <pre> <c3>~<c4>CTCP<c3>~<c4> <nick> -> <ctcp> : <text>
CTCPChan <pre> <c3>~<c4>CTCP<c3>~<c4> <nick>:<chan> <c3>[<c4><address><c3>]<c4> <ctcp> : <text>
CTCPChanSelf <pre> <c3>~<c4>CTCP<c3>~<c4> <chan> -> <ctcp> : <text>
CTCPReply <pre> <c3>~<c4>CTCP REPLY<c3>~<c4> <nick><chan> <c3>[<c4><address><c4>]<c4> <ctcp> : <text>
CTCPReplySelf <pre> <c3>~<c4>CTCP REPLY<c3>~<c4> <nick> -> <ctcp> : <text>
Whowas <c1>:<c2>:<c3>.<c4> Whowas: <nick> [<address>] <realname>
Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <text>
RAW.311 !script nature.whois1
RAW.317 !script nature.whois2
RAW.312 !script nature.whois3
RAW.307 !script nature.whois4
RAW.313 !script nature.whois5
RAW.301 !script nature.whois6
RAW.318 !script nature.whois7
RAW.001 <c1>:<c2>:<c3>.<c4> <text>
RAW.002 <c1>:<c2>:<c3>.<c4> Server: <server> running version <value>
RAW.003 <c1>:<c2>:<c3>.<c4> Server: created on: <value>
RAW.005 <c1>:<c2>:<c3>.<c4> Protocols supported by this server: <text>
RAW.250 <c1>:<c2>:<c3>.<c4> Total connection(s): <value>
RAW.251 <c1>:<c2>:<c3>.<c4> Users: <users> Invisible: <text> Servers: <value>
RAW.252 <c1>:<c2>:<c3>.<c4> Operator(s) online: <value>
RAW.253 <c1>:<c2>:<c3>.<c4> Unknown connection(s): <value>
RAW.254 <c1>:<c2>:<c3>.<c4> Number of channels formed: <value>
RAW.255 <c1>:<c2>:<c3>.<c4> Local clients: <users> on <value> server(s)
RAW.265 <c1>:<c2>:<c3>.<c4> Local users: <users> Max: <value>
RAW.266 <c1>:<c2>:<c3>.<c4> Global users: <users> Max: <value>
RAW.302 <c1>:<c2>:<c3>.<c4> Userhost: <address>
RAW.315 <c1>:<c2>:<c3>.<c4> End of /WHO list for <chan>
RAW.324 <c1>:<c2>:<c3>.<c4> Modes in <chan>: <modes>
RAW.332 <c1>:<c2>:<c3>.<c4> Topic is: '<text><c1>'
RAW.333 <c1>:<c2>:<c3>.<c4> Set by: <nick> on <text>
RAW.341 <c1>:<c2>:<c3>.<c4> <nick> has been invited to <chan>
RAW.352 <c1>:<c2>:<c3>.<c4> <cmode><nick> (<address>) <realname>
RAW.353 <c1>:<c2>:<c3>.<c4> <chan>: <text>
RAW.366 <c1>:<c2>:<c3>.<c4> End of /NAMES list for <chan>
RAW.375 <c1>:<c2>:<c3>.<c4> Message of the day:
RAW.372 <c1>:<c2>:<c3>.<c4> <text>
RAW.376 <c1>:<c2>:<c3>.<c4> End of /MOTD command.
RAW.391 <c1>:<c2>:<c3>.<c4> Date: <value>
RAW.401 <c1>:<c2>:<c3>.<c4> No such nickname <nick>
RAW.403 <c1>:<c2>:<c3>.<c4> No such channel <chan>
RAW.404 <c1>:<c2>:<c3>.<c4> Unable to send message to <chan>
RAW.421 <c1>:<c2>:<c3>.<c4> Invalid command: <value>
RAW.433 <c1>:<c2>:<c3>.<c4> Nickname: <nick> is already in use.
RAW.471 <c1>:<c2>:<c3>.<c4> Unable to join <chan> (its full +l)
RAW.473 <c1>:<c2>:<c3>.<c4> Unable to join <chan> (its invite only +i)
RAW.474 <c1>:<c2>:<c3>.<c4> Unable to join <chan> you're banned +b)
RAW.475 <c1>:<c2>:<c3>.<c4> Unable to join <chan> (requires key +k)
RAW.482 <c1>:<c2>:<c3>.<c4> You're not a operator on <chan>
RAW.Other <c1>:<c2>:<c3>.<c4> <pre> <text>
RGBcolors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 114,235,177 0,255,0 0,144,144 0,255,255 0,202,202 0,64,64 0,98,98 0,140,140
BaseColors 15,12,8,0
CLineOwner 09
CLineOP 24
CLineHOP 28
CLineVoice 28
CLineRegular 28
CLineMe 11
ClineCharOwner 00.
ClineCharOP 09@
ClineCharHOP 24%
ClineCharVoice 28+ 
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11