[mts]
Name Ocean
Author HENNESSY
Email HennesScript@planet.nl
Description The colors of the ocean...
Version 0.6
MTSVersion 1.0
SCRIPT Ocean.mrc
SCHEME1 Freaky colors
SCHEME4 Pro mode
Load !script ocean_load
Unload <pre> Ocean theme unloaded
Colors 13,6,12,4,2,15,15,15,15,15,15,1,5,7,6,1,15,2,15,5,1,9,11,13,1,15 
Prefix 12VvV
Timestamp [HH:nn:ss]
ParenText <c3>[<text><c3>]
Mode <pre> <c3><lt><c4>Mode<c2><gt><c4> <nick> <c3>sets mode:<c4> <modes>
ModeUser <pre> <c3><lt><c4>Mode<c3><gt><c4> <nick> <c3>sets mode:<c4> <modes>
Join <pre> <c3><lt><c4>Join<c3><gt><c4> <nick> <c3>[<c4><address><c3>]
JoinSelf <pre> <c3><lt><c4>Join<c3><gt><c4> You joined: <chan>
Part <pre> <c3><lt><c4>Part<c3><gt><c4> <nick> <c3>[<c4><address><c3>] <parentext>
Kick <pre> <c3><lt><c4>Kick<c3><gt><c4> <knick> <c3>is kicked by<c4> <nick> <parentext>
KickSelf <pre> <c3><lt><c4>Kick<c3><gt><c4> You<c3> were kicked by<4> <nick> <c3>[<c4><address><c3>] from<c4> <chan> <parentext>
Quit <pre> <c3><lt><c4>Quit<c3><gt><c4> <nick> <c3>[<c4><address><c3>] <parentext>
Topic <pre> <c3><lt><c4>Topic<c3><gt><c4> <nick> <c3>sets a new topic: <text>
Nick <pre> <c3><lt><c4>Nick<c3><gt><c4> <nick> <c3>is now known as<c4> <newnick>
NickSelf <pre> <c3><lt><c4>Nick<c3><gt><c4> You <c3>are now known as<c4> <newnick>
Invite <pre> <c3><lt><c4>Invite<c3><gt><c4> <nick> <c3>invites you to join<4> <chan>
ServerError <pre> <c3><lt><c4>Error<c3><gt><c3> Error:<c4> <text>
Notice ~<nick>~ <text>
NoticeChan ~<nick>:<chan>~ <text>
NoticeSelf ~<nick>~ <text>
Rejoin <pre> <c3><lt><c4>Rejoin<c3><gt><c4> Rejoining <chan>...
TextChan <c3><cmode>9<nick>12» <text>
TextChanSelf <c3><cmode>9<me>12» <text>
ActionChan 9* <cmode><nick> <text>
ActionChanSelf 9* <cmode><me> <text>
DNS <pre> <c3><lt><c4>DNS<c3><gt><c3> Looking up<c4> <nick><address>
DNSError <pre> <c3><lt><c4>DNS<c3><gt><c3> Unable to resolve<c4> <nick><address>
DNSResolve <pre> <c3><lt><c4>DNS<c3><gt><c3> Resolved:<c4> <address> <c3>to<c4> <raddress>
TextQuery 9<nick>12) <text>
TextQuerySelf 9<me>12) <text>
ActionQuery 9* <nick> <text>
ActionQuerySelf *9 <me> <text>
TextMsg 11(9<nick>11» <text>
TextMsgSelf 11(9<me>11» -> <nick>: <text>
CTCP <pre> <c3><lt><c4>CTCP<c3><gt><c4> <nick> <c3>[<c4><address><c3>]<c4> <ctcp> : <text>
CTCPSelf <pre> <c3><lt><c4>CTCP<c3><gt><c4> <nick> -> <ctcp> : <text>
CTCPChan <pre> <c3><lt><c4>CTCP<c3><gt><c4> <nick>:<chan> <c3>[<c4><address><c3>]<c4> <ctcp> : <text>
CTCPChanSelf <pre> <c3><lt><c4>CTCP<c3><gt><c4> <chan> -> <ctcp> : <text>
CTCPReply <pre> <c3><lt><c4>CTCP REPLY<c3><gt><c4> <nick><chan> <c3>[<c4><address><c4>]<c4> <ctcp> : <text>
CTCPReplySelf <pre> <c3><lt><c4>CTCP REPLY<c3><gt><c4> <nick> -> <ctcp> : <text>
Whois !script
Whowas <c3>~<c2>~  Whowas: <nick> [<address>] <realname>
Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <text>
RAW.311 !script ocean.whois1
RAW.317 !script ocean.whois2
RAW.312 !script ocean.whois3
RAW.307 !script ocean.whois4
RAW.313 !script ocean.whois5
RAW.301 !script ocean.whois6
RAW.318 !script ocean.whois7
RAW.001 <c3>~<c2>~ <text>
RAW.002 <c3>~<c2>~ Server: <server> running version <value>
RAW.003 <c3>~<c2>~ Server: created on: <value>
RAW.005 <c3>~<c2>~ Protocols supported by this server: <text>
RAW.250 <c3>~<c2>~ Total connection(s): <value>
RAW.251 <c3>~<c2>~ Users: <users> Invisible: <text> Servers: <value>
RAW.252 <c3>~<c2>~ Operator(s) online: <value>
RAW.253 <c3>~<c2>~ Unknown connection(s): <value>
RAW.254 <c3>~<c2>~ Number of channels formed: <value>
RAW.255 <c3>~<c2>~ Local clients: <users> on <value> server(s)
RAW.265 <c3>~<c2>~ Local users: <users> Max: <value>
RAW.266 <c3>~<c2>~ Global users: <users> Max: <value>
RAW.302 <c3>~<c2>~ Userhost: <address>
RAW.315 <c3>~<c2>~ End of /WHO list for <chan>
RAW.324 <c3>~<c2>~ Modes in <chan>: <modes>
RAW.332 <c3>~<c2>~ Topic is: '<text><c1>'
RAW.333 <c3>~<c2>~ Set by: <nick> on <text>
RAW.341 <c3>~<c2>~ <nick> has been invited to <chan>
RAW.352 <c3>~<c2>~ <cmode><nick> (<address>) <realname>
RAW.353 <c3>~<c2>~ <chan>: <text>
RAW.366 <c3>~<c2>~ End of /NAMES list for <chan>
RAW.375 <c3>~<c2>~ Message of the day:
RAW.372 <c3>~<c2>~ <text>
RAW.376 <c3>~<c2>~ End of /MOTD command.
RAW.391 <c3>~<c2>~ Date: <value>
RAW.401 <c3>~<c2>~ No such nickname <nick>
RAW.403 <c3>~<c2>~ No such channel <chan>
RAW.404 <c3>~<c2>~ Unable to send message to <chan>
RAW.421 <c3>~<c2>~ Invalid command: <value>
RAW.433 <c3>~<c2>~ Nickname: <nick> is already in use.
RAW.471 <c3>~<c2>~ Unable to join <chan> (its full +l)
RAW.473 <c3>~<c2>~ Unable to join <chan> (its invite only +i)
RAW.474 <c3>~<c2>~ Unable to join <chan> you're banned +b)
RAW.475 <c3>~<c2>~ Unable to join <chan> (requires key +k)
RAW.482 <c3>~<c2>~ You're not a operator on <chan>
RAW.Other <c3>~<c2>~ <pre> <text>
RAW.0 <c3>~<c2>~ <pre> <nick> sets a new <value> in <chan>: <text>
RGBcolors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,83,166 0,144,144 0,255,255 0,0,255 177,226,255 60,157,255 0,83,166
BaseColors 2,14,12,15
CLineOwner 02
CLineOP 02
CLineHOP 12
CLineVoice 15
CLineRegular 15
CLineMe 01
ClineCharOwner 02.
ClineCharOP 09@
ClineCharHOP 12%
ClineCharVoice 15+ 
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
ImageStatus center ocean.jpg
ImageChan photo channel.jpg
ImageToolbar fill toolbar.jpg
ImageSwitchbar fill toolbar.jpg
[Freaky colors]
BaseColors 4,6,7,12
[Pro mode]
BaseColors 2,14,12,15
Prefix 15:~:
TextChan 12[<c3><cmode>9<nick>12] <text>
TextChanSelf 12[<c3><cmode>9<me>12] <text>
TextQuery 12[9<nick>12] <text>
TextQuerySelf 12[9<me>12] <text>
