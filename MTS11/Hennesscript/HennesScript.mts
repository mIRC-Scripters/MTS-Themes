[mts]
Name HennesScript
Author HENNESSY
Email HennesScript@planet.nl
Description HennesScript NW default theme
Version 0.50
MTSVersion 1.1
SCRIPT HennesScript.mrc
Load <pre> HennesScript NW theme loaded, get more at: http://HennesScript.cjb.net
Unload <pre> HennesScript NW theme unloaded
Colors 0,12,1,4,2,3,1,10,1,14,14,1,7,7,14,1,14,14,1,5,12,0,12,0,1,15 
Prefix •
Timestamp [HH:nn:ss]
ParenText saying: <text>
Mode <pre> <nick> sets mode: <modes>
ModeUser <pre> <nick> sets mode: <modes>
Join !script HSNW.JOIN
JoinSelf <pre> You joined <chan>
Part <pre> Part: <nick> (<address>) <parentext>
Kick <pre> <knick> was kicked by <nick> <parentext>
KickSelf <pre> You were kicked from <chan> by <nick> (<address>) <parentext>
Quit <pre> Quit: <nick> (<address>) has quit irc <parentext>
Topic <pre> <nick> sets a new topic: <text>
Nick <pre> <nick> is now known as <newnick>
NickSelf !script
Invite <pre> <nick> invites you to join <chan>
ServerError <pre> Error: <text>
Notice -<nick>- <text>
NoticeChan -<nick>:<chan>- <text>
NoticeSelf -> -<nick>- <text>
Rejoin <pre> Rejoining <chan>...
TextChan <c1>[<cmode><nick><c1>] <text>
TextChanSelf <c1>[<cmode><me><c1>] <text>
ActionChan * <cmode><nick> <text>
ActionChanSelf * <cmode><me> <text>
DNS *** Looking up <nick><address>
DNSError *** Unable to resolve <nick><address>
DNSResolve *** Resolved <address> to <raddress>
TextQuery <c1>[<nick><c1>] <text>
TextQuerySelf <c1>[<me><c1>] <text>
ActionQuery * <nick> <text>
ActionQuerySelf * <me> <text>
TextMsg <c1>[<nick><c1>] <text>
TextMsgSelf -> *<nick>* <text>
CTCP <pre> CTCP: <nick> [<address>] <ctcp> <text>
CTCPSelf -> [<nick>] <text>
CTCPChan <pre> CTCP: <nick>:<chan> [<address>] <ctcp> <text>
CTCPChanSelf -> [<nick>] <text>
CTCPReply <pre> CTCP reply: <nick><chan> [<address>] <ctcp> <text>
CTCPReplySelf <pre> Sending reply: <nick> [<address>] <ctcp> <text>
Whowas <pre> Whowas: <nick> [<address>] <realname>
Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <text>
RAW.311 !script hsnw.whois1
RAW.317 !script hsnw.whois2
RAW.312 !script hsnw.whois3
RAW.307 !script hsnw.whois4
RAW.313 !script hsnw.whois5
RAW.301 !script hsnw.whois6
RAW.318 !script hsnw.whois7
RAW.001 <pre> <text>
RAW.002 <pre> Server: <server> running version <value>
RAW.003 <pre> Server: created on: <value>
RAW.005 <pre> Protocols supported by this server: <text>
RAW.250 <pre> Total connection(s): <value>
RAW.251 <pre> Users: <users> Invisible: <text> Servers: <value>
RAW.252 <pre> Operator(s) online: <value>
RAW.253 <pre> Unknown connection(s): <value>
RAW.254 <pre> Number of channels formed: <value>
RAW.255 <pre> Local clients: <users> on <value> server(s)
RAW.265 <pre> Local users: <users> Max: <value>
RAW.266 <pre> Global users: <users> Max: <value>
RAW.302 <pre> Userhost: <address>
RAW.315 <pre> End of /WHO list for <chan>
RAW.324 <pre> Modes in <chan>: <modes>
RAW.332 <pre> Topic is: '<text><c1>'
RAW.333 <pre> Set by: <nick> on <text>
RAW.341 <pre> <nick> has been invited to <chan>
RAW.352 <pre> <cmode><nick> (<address>) <realname>
RAW.353 <pre> <chan>: <text>
RAW.366 <pre> End of /NAMES list for <chan>
RAW.375 <pre> Message of the day:
RAW.372 <pre> <text>
RAW.376 <pre> End of /MOTD command.
RAW.391 <pre> Date: <value>
RAW.401 <pre> No such nickname <nick>
RAW.403 <pre> No such channel <chan>
RAW.404 <pre> Unable to send message to <chan>
RAW.421 <pre> Invalid command: <value>
RAW.433 <pre> Nickname: <nick> is already in use.
RAW.471 <pre> Unable to join <chan> (its full +l)
RAW.473 <pre> Unable to join <chan> (its invite only +i)
RAW.474 <pre> Unable to join <chan> you're banned +b)
RAW.475 <pre> Unable to join <chan> (requires key +k)
RAW.482 <pre> You're not a operator on <chan>
RAW.Other <pre> <pre> <text>
BaseColors 15,15,15,15
CLineOwner 02
CLineOP 10
CLineHOP 10
CLineVoice 1
CLineRegular 1
CLineMe 12
ClineCharOwner 02.
ClineCharOP 10@
ClineCharHOP 10%
ClineCharVoice 01+ 
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11