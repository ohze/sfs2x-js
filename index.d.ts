//Based on the documentation http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/

export = SFS2X;

declare namespace SFS2X {
    interface LoginConfig {
        /**
         * The IP address or host name of the SmartFoxServer 2X instance to connect to.
         */
        host?: string;
        /**
         * The TCP port of the SmartFoxServer 2X instance to connect to.
         */
        port?: number;
        /**
         * Use an encrypted SSL connection.
         */
        useSSL?: boolean;
        /**
         * The IP address or host name of the SmartFoxServer 2X instance to connect to.
         */
        zone?: string;
        /**
         * Indicates whether the client-server messages console debug should be enabled or not.
         */
        debug?: boolean;
    }

    interface SFSDataWrapper {
        type: number;
        value: SFSObject;
    }

    /**
     * The main event types dispatched by the SmartFoxServer 2X JavaScript API.
     * The constants contained in this class are used to register the event listeners; when an event is dispatched,
     * an object containing event-specific parameters is passed to the listener. See the documentation below for a
     * description of the parameters available for each event.
     */
    class SFSEvent {
        static HANDSHAKE: "handshake";
        static CONNECTION: "connection";
        static CONNECTION_LOST: "connectionLost";
        static LOGIN: "login";
        static LOGIN_ERROR: "loginError";
        static LOGOUT: "logout";
        static ROOM_ADD: "roomAdd";
        static ROOM_CREATION_ERROR: "roomCreationError";
        static ROOM_REMOVE: "roomRemove";
        static ROOM_JOIN: "roomJoin";
        static ROOM_JOIN_ERROR: "roomJoinError";
        static USER_ENTER_ROOM: "userEnterRoom";
        static USER_EXIT_ROOM: "userExitRoom";
        static USER_COUNT_CHANGE: "userCountChange";
        static PROXIMITY_LIST_UPDATE: "proximityListUpdate";
        static PLAYER_TO_SPECTATOR: "playerToSpectator";
        static PLAYER_TO_SPECTATOR_ERROR: "playerToSpectatorError";
        static SPECTATOR_TO_PLAYER: "spectatorToPlayer";
        static SPECTATOR_TO_PLAYER_ERROR: "spectatorToPlayerError";
        static ROOM_NAME_CHANGE: "roomNameChange";
        static ROOM_NAME_CHANGE_ERROR: "roomNameChangeError";
        static ROOM_PASSWORD_STATE_CHANGE: "roomPasswordStateChange";
        static ROOM_PASSWORD_STATE_CHANGE_ERROR: "roomPasswordStateChangeError";
        static ROOM_CAPACITY_CHANGE: "roomCapacityChange";
        static ROOM_CAPACITY_CHANGE_ERROR: "roomCapacityChangeError";
        static PUBLIC_MESSAGE: "publicMessage";
        static PRIVATE_MESSAGE: "privateMessage";
        static OBJECT_MESSAGE: "objectMessage";
        static MODERATOR_MESSAGE: "moderatorMessage";
        static ADMIN_MESSAGE: "adminMessage";
        static EXTENSION_RESPONSE: "extensionResponse";
        static ROOM_VARIABLES_UPDATE: "roomVariablesUpdate";
        static USER_VARIABLES_UPDATE: "userVariablesUpdate";
        static MMOITEM_VARIABLES_UPDATE: "mmoItemVariablesUpdate";
        static ROOM_GROUP_SUBSCRIBE: "roomGroupSubscribe";
        static ROOM_GROUP_SUBSCRIBE_ERROR: "roomGroupSubscribeError";
        static ROOM_GROUP_UNSUBSCRIBE: "roomGroupUnsubscribe";
        static ROOM_GROUP_UNSUBSCRIBE_ERROR: "roomGroupUnsubscribeError";
        static ROOM_FIND_RESULT: "roomFindResult";
        static USER_FIND_RESULT: "userFindResult";
        static INVITATION: "invitation";
        static INVITATION_REPLY: "invitationReply";
        static INVITATION_REPLY_ERROR: "invitationReplyError";
        static PING_PONG: "pingPong";
        static SOCKET_ERROR: "socketError";

        success: boolean;
    }

    interface SmartFoxEventMap extends SFSEventMap, BuddyEventMap {
    }

    interface SFSEventMap {
        "handshake"; // don't have document http://docs2x.smartfoxserver.com/api-docs/jsdoc/client/SFSEvent.html
        "connection": ConnectionEvent;
        "connectionLost": ConnectionLostEvent;
        "login": LoginEvent;
        "loginError": LoginErrorEvent;
        "logout": LogoutEvent;
        "roomAdd": RoomAddEvent;
        "roomCreationError": RoomCreationErrorEvent;
        "roomRemove": RoomRemoveEvent;
        "roomJoin": RoomJoinEvent;
        "roomJoinError": RoomJoinErrorEvent;
        "userEnterRoom": UserEnterRoomEvent;
        "userExitRoom": UserExitRoomEvent;
        "userCountChange": UserCountChangeEvent;
        "proximityListUpdate": ProximityListUpdateEvent;
        "playerToSpectator": PlayerToSpectatorEvent;
        "playerToSpectatorError": PlayerToSpectatorErrorEvent;
        "spectatorToPlayer": SpectatorToPlayerEvent;
        "spectatorToPlayerError": SpectatorToPlayerErrorEvent;
        "roomNameChange": RoomNameChangeEvent;
        "roomNameChangeError": RoomNameChangeErrorEvent;
        "roomPasswordStateChange": RoomPasswordStateChangeEvent;
        "roomPasswordStateChangeError": RoomPasswordStateChangeErrorEvent;
        "roomCapacityChange": RoomCapacityChangeEvent;
        "roomCapacityChangeError": RoomCapacityChangeErrorEvent;
        "publicMessage": PublicMessageEvent;
        "privateMessage": PrivateMessageEvent;
        "objectMessage": ObjectMessageEvent;
        "moderatorMessage": ModeratorMessageEvent;
        "adminMessage": AdminMessageEvent;
        "extensionResponse": ExtensionResponseEvent;
        "roomVariablesUpdate": RoomVariablesUpdateEvent;
        "userVariablesUpdate": UserVariablesUpdateEvent;
        "mmoItemVariablesUpdate": MMOItemVariablesUpdateEvent;
        "roomGroupSubscribe": RoomGroupSubscribeEvent;
        "roomGroupSubscribeError": RoomGroupSubscribeErrorEvent;
        "roomGroupUnsubscribe": RoomGroupUnsubscribeEvent;
        "roomGroupUnsubscribeError": RoomGroupUnsubscribeErrorEvent;
        "roomFindResult": RoomFindResultEvent;
        "userFindResult": UserFindResultEvent;
        "invitation": InvitationEvent;
        "invitationReply": InvitationReplyEvent;
        "invitationReplyError": InvitationReplyErrorEvent;
        "pingPong": PingPongEvent;
        "socketError": SocketErrorEvent;
    }

    enum SFSDataType {
        NULL = 0,
        BOOL = 1,
        BYTE = 2,
        SHORT = 3,
        INT = 4,
        LONG = 5,
        FLOAT = 6,
        DOUBLE = 7,
        UTF_STRING = 8,
        BOOL_ARRAY = 9,
        BYTE_ARRAY = 10,
        SHORT_ARRAY = 11,
        INT_ARRAY = 12,
        LONG_ARRAY = 13,
        FLOAT_ARRAY = 14,
        DOUBLE_ARRAY = 15,
        UTF_STRING_ARRAY = 16,
        SFS_ARRAY = 17,
        SFS_OBJECT = 18,
        TEXT = 20
    }

    enum UserPrivileges {
        ADMINISTRATOR,
        GUEST,
        MODERATOR,
        STANDARD
    }

    class Vec3D {
        constructor(px: number, py: number, pz?: number, useFloats?: boolean);

        px: number;
        py: number;
        pz?: number;
        useFloats?: boolean;
    }

    class SFSObject {

        containsKey(key: string): boolean;

        /**
         * Returns the value assigned to the specified key.
         * If the typeId parameter is passed, this method also executes a type check, to make sure the requested value
         * has the expected type. In particular this is used by the other specialized get...() methods.
         * @param {string} key The key whose associated value is to be returned.
         * @param {SFSDataType} typeId The identifier of the expected value's type;
         * must be one of the constants set in the SFSDataType class.
         * If passed and the type is not corresponding, an error is thrown.
         * If not passed, no type check is executed and the value is returned immediately.
         * Defaults to null
         * @return {any} The value assigned to the specified key. null is returned if no value is associated with
         * the passed key.
         */
        get(key: string, typeId?: SFSDataType): any;

        getBool(key: string): boolean;

        getBoolArray(key: string): boolean[];

        getByte(key: string): number;

        getByteArray(key: string): number[];

        getDouble(key: string): number;

        getDoubleArray(key: string): number[];

        /**
         * Provides a formatted string representing this object.
         * The returned string can be logged or traced in the console for debugging purposes.
         * @param {boolean} format If true, the output is formatted in a human-readable way.
         * @return {string} The string representation of this object.
         */
        getDump(format?: boolean): string;

        getFloat(key: string): number;

        getFloatArray(key: string): number[];

        /**
         * Provides a detailed hexadecimal representation of this object.
         * The returned string can be logged or traced in the console for debugging purposes.
         * @return {string} The hexadecimal string representation of this object.
         */
        getHexDump(): string;

        getInt(key: string): number;

        getIntArray(key: string): number[];

        getKeysArray(): string[];

        /**
         * Returns the long integer corresponding to the passed key.
         *
         * IMPORTANT: in JavaScript, long integer numbers are limited to Number.MAX_SAFE_INTEGER
         * (positive and negative, inclusive). This is inconsistent with the max and min Long values available in Java,
         * which are down to -2^63 and up to 2^63 - 1. In case a number greater than Number.MAX_SAFE_INTEGER is
         * returned, this could differ from the actual value set on the server side
         * (a warning will be logged on the client).
         * @param {string} key The key whose associated value is to be returned.
         * @return {number} The value assigned to the specified key.
         */
        getLong(key: string): number;

        /**
         * Returns the array of long integers corresponding to the passed key.
         *
         * IMPORTANT: in JavaScript, long integer numbers are limited to Number.MAX_SAFE_INTEGER
         * (positive and negative, inclusive). This is inconsistent with the max and min Long values available in Java,
         * which are down to -2^63 and up to 2^63 - 1. In case a number greater than Number.MAX_SAFE_INTEGER is
         * returned, this could differ from the actual value set on the server side
         * (a warning will be logged on the client).
         * @param {string} key The key whose associated value is to be returned.
         * @return {number} The array assigned to the specified key.
         */
        getLongArray(key: string): number[];

        getSFSArray(key: string): SFSArray;

        getSFSObject(key: string): SFSObject;

        getShort(key: string): number;

        getShortArray(key: string): number[];

        getText(key: string): string;

        getUtfString(key: string): string;

        getUtfStringArray(key: string): string[];

        getWrappedItem(key: string): SFSDataWrapper;

        /**
         * Assign a value of the passed type to the passed key.
         * @param {string} key The key to which the specified value has to be assigned.
         * @param value The value to be assigned to the passed key.
         * @param typeId The value's type identifier; must be one of the constants set in the SFSDataType class.
         */
        put(key: string, value, typeId): void;

        putBool(key: string, value: boolean): void;

        putBoolArray(key: string, array: boolean[]): void;

        putByte(key: string, value: number): void;

        putByteArray(key: string, array: number[]): void;

        putDouble(key: string, value: number): void;

        putDoubleArray(key: string, array: number[]): void;

        putFloat(key: string, value: number): void;

        putFloatArray(key: string, array: number[]): void;

        putInt(key: string, value: number): void;

        putIntArray(key: string, array: number[]): void;

        putLong(key: string, value: number): void;

        putLongArray(key: string, array: number[]): void;

        putNull(key: string): void;

        putSFSArray(key: string, value: SFSArray): void;

        putSFSObject(key: string, value: SFSObject): void;

        putShort(key: string, value: number): void;

        putShortArray(key: string, array: number[]): void;

        putText(key: string, value: string): void;

        putUtfString(key: string, value: string): void;

        putUtfStringArray(key: string, array: string[]): void;

        size(): number;
    }

    class SFSArray {
        add(value: any, typeId: SFSDataType): void;

        addBool(value: boolean): void;

        addBoolArray(array: boolean[]): void;

        addByte(value: number): void;

        addByteArray(array: number[]): void;

        addDouble(value: number): void;

        addDoubleArray(array: number[]): void;

        addFloat(value: number): void;

        addFloatArray(array: number[]): void;

        addInt(value: number): void;

        addIntArray(array: number[]): void;

        addLong(value: number): void;

        addLongArray(array: number[]): void;

        addNull(): void;

        addSFSArray(value: SFSArray): void;

        addSFSObject(value: SFSObject): void;

        addShort(value: number): void;

        addShortArray(array: number[]): void;

        addText(value: string): void;

        addUtfString(value: string): void;

        addUtfStringArray(array: string[]): void;

        get(index: number, typeId?: SFSDataType): any;

        getBool(index: number): boolean;

        getBoolArray(index: number): boolean[];

        getByte(index: number): number;

        getByteArray(index: number): number[];

        getDouble(index: number): number;

        getDoubleArray(index: number): number[];

        getDump(format?: boolean): string;

        getFloat(index: number): number;

        getFloatArray(index: number): number[];

        getHexDump(): string;

        getInt(index: number): number;

        getIntArray(index: number): number[];

        getLong(index: number): number;

        getLongArray(index: number): number[];

        getSFSArray(index: number): SFSArray;

        getSFSObject(index: number): SFSObject;

        getShort(index: number): number;

        getShortArray(index: number): number[];

        getText(index: number): string;

        getUtfString(index: number): string;

        getUtfStringArray(index: number): string[];

        getWrappedItem(key: string): SFSDataWrapper;

        size(): number;
    }

    class SFSUser {

        constructor(id: number, name: string);

        /**
         * Indicates the id of this user. It is unique and it is generated by the server when the user is created.
         */
        id: number;

        /**
         * Returns the entry point of this user in the current user's AoI.

         The returned coordinates are those that the user had when his presence in the current user's Area of Interest
         was last notified by a proximityListUpdate event. This field is populated only if the user joined a Room of
         type MMORoom and this is configured to receive such data from the server.
         */
        aoiEntryPoint: Vec3D;

        /**
         * Indicates whether this user logged in as an administrator or not. Administrator users have the privilegeId
         * property set to UserPrivileges.ADMINISTRATOR.
         */
        isAdmin: boolean;

        /**
         * Indicates whether this user logged in as a guest or not. Guest users have the privilegeId property set to
         * UserPrivileges.GUEST.
         */
        isGuest: boolean;

        /**
         * Indicates if this SFSUser object represents the current client.
         */
        isItMe: boolean;

        /**
         * Indicates whether this user logged in as a moderator or not. Moderator users have the privilegeId property
         * set to UserPrivileges.MODERATOR.
         */
        isModerator: boolean;

        /**
         * Indicates whether this user is a player (playerId greater than 0) in the last joined Room or not.
         * Non-Game Rooms always return false.
         * If the user is inside multiple Game Rooms at the same time, use the isPlayerInRoom() method.
         */
        isPlayer: boolean;

        /**
         * Indicates whether this user is a spectator (playerId lower than 0) in the last joined Room or not.
         * Non-Game Rooms always return false.
         * If the user is inside multiple Game Rooms at the same time, use the isSpectatorInRoom() method.
         */
        isSpectator: boolean;

        /**
         * Indicates whether this user logged in as a standard user or not. Standard users have the privilegeId
         * property set to UserPrivileges.STANDARD.
         */
        isStandardUser: boolean;

        /**
         * Indicates the name of this user. Two users in the same Zone can't have the same name.
         */
        name: string;

        /**
         * Returns the id which identifies the privilege level of this user.
         */
        privilegeId: UserPrivileges;

        /**
         * Defines a generic utility object that can be used to store custom user data.
         * The values added to this object are for client-side use only and are
         * never transmitted to the server or to the other clients.
         */
        properties: Object;

        _setVariables(userVariables: SFSUserVariable[]): void;

        _setVariable(userVariable: SFSUserVariable): void;

        _setPlayerId(id: number, room: SFSRoom);

        /**
         * Indicates whether this user has the specified User Variable set or not.
         * @param varName The name of the User Variable whose existance must be checked.
         * @returns true if a User Variable with the passed name is set for this user.
         */
        containsVariable(varName: string): boolean;

        /**
         * Returns the playerId value of this user in the passed Room. See the playerId property description
         * for more informations.
         *
         * @param room The SFSRoom object representing the Room to retrieve the player id from.
         *
         * @returns The playerId of this user in the passed Room.
         */
        getPlayerId(room: SFSRoom): number;

        /**
         * Returns a reference to the User Manager which manages this user.
         *
         * @Returns {UserManager} The User Manager to which this user is associated.
         */
        getUserManager(): SFSUserManager;

        /**
         * Retrieves a User Variable from its name.
         * @param varName The name of the User Variable to be retrieved.
         *
         * @returns: The object representing the User Variable, or null if no User Variable with the passed name
         * is associated with this user.
         */
        getVariable(varName: string): SFSUserVariable;

        /**
         * Retrieves all the User Variables of this user.
         *
         * @returns {Array} The list of SFSUserVariable objects associated with the user.
         */
        getVariables(): SFSUserVariable[];

        /**
         * Indicates whether this user joined the passed Room or not.
         *
         * @param room The SFSRoom object representing the Room where to check the user presence.
         * @returns: {Boolean} true if this user is inside the passed Room.
         */
        isJoinedInRoom(room: SFSRoom): boolean;

        /**
         * Indicates whether this user is a player (playerId greater than 0) in the passed Room or not.
         * Non-Game Rooms always return false.
         * If a user can join one Game Rooms at a time only, use the isPlayer property.
         *
         * @param room The SFSRoom object representing the Room where to check if this user is a player.
         * @returns: {Boolean} true if this user is a player in the passed Room.
         */
        isPlayerInRoom(room: SFSRoom): boolean;

        /**
         * Indicates whether this user is a spectator (playerId lower than 0) in the passed Room or not.
         * Non-Game Rooms always return false.
         * If a user can join one Game Rooms at a time only, use the isSpectator property.
         *
         * @param room The SFSRoom object representing the Room where to check if this user is a spectator.
         * @returns: {Boolean} true if this user is a spectator in the passed Room.
         */
        isSpectatorInRoom(room: SFSRoom): boolean;
    }

    class SFSRoom {

        /**
         * Returns the maximum amount of users, including spectators, that can be contained in this Room.
         */
        capacity: number;
        /**
         * Returns the Room Group name. Each Group is identified by a unique string (its name or id) and it represents
         * a different "container" for Rooms.
         * Room Groups enable developers to organize Rooms under different types or categories and let clients select
         * only those Groups they are interested in, in order to receive their events only. This is done via the
         * SubscribeRoomGroupRequest and UnsubscribeRoomGroupRequest requests.
         */
        groupId: string;
        /**
         * Indicates the id of this Room. The id is unique and it is generated by the server when the Room is created.
         */
        id: number;
        /**
         * Indicates whether this is a Game Room or not.
         */
        isGame: boolean;
        /**
         * Indicates whether this Room is hidden or not. This is a utility flag that can be used by developers to hide
         * certain Rooms from the interface of their application.
         */
        isHidden: boolean;
        /**
         * Indicates whether the client joined this Room or not. Use the JoinRoomRequest request to join a new Room.
         */
        isJoined: boolean;
        /**
         * Indicates whether this Room requires a password to be joined or not. This flag depends on the Room's
         * password set when the Room is created or by means of the ChangeRoomPasswordStateRequest request.
         */
        isPasswordProtected: boolean;
        /**
         * Returns the maximum number of spectators allowed in this Room (Game Rooms only). If allowed, the
         * maxSpectators value can be changed through the ChangeRoomCapacityRequest request.
         */
        maxSpectators: number;
        /**
         * Returns the maximum number of users allowed in this Room. In case of Game Rooms, this is the maximum number
         * of players. If allowed, the maxUsers value can be changed through the ChangeRoomCapacityRequest request.
         */
        maxUsers: number;
        /**
         * Defines a generic utility object that can be used to store custom Room data. The values added to this object
         * are for client-side use only and are never transmitted to the server or to the other clients.
         */
        properties: any;
        /**
         * Indicates the name of this Room. Two Rooms in the same Zone can't have the same name. If allowed, the name
         * can be changed through the ChangeRoomNameRequest request.
         */
        name: string;

        /**
         * Returns the current number of spectators in this Room (Game Rooms only).
         */
        spectatorCount: number;

        /**
         * Returns the current number of users in this Room. In case of Game Rooms, this is the number of players.
         */
        userCount: number;

        constructor(id: number, name: string, groupId?: string);

        /**
         * Indicates whether the specified user is currently inside this Room or not.
         * @param {SFSUser} user The SFSUser object representing the user whose presence in this
         * Room must be checked.
         * @return {boolean} true if the user is inside this Room; false otherwise.
         */
        containsUser(user: SFSUser): boolean;

        containsVariable(varName: string): boolean;

        getPlayerList(): SFSUser[];

        getRoomManager(): SFSRoomManager;

        getSpectatorList(): SFSUser[];

        getUserById(id: number): SFSUser;

        getUserByName(name: string): SFSUser;

        getUserList(): SFSUser[];

        getVariable(varName: string): SFSRoomVariable;

        getVariables(): SFSRoomVariable[];

        _addUser(user: SFSUser): void;

        _removeUser(user: SFSUser): void;

        _setVariables(roomVariables: SFSRoomVariable[]): void;

        _setVariable(roomVariable: SFSRoomVariable): void;

        toString(): string;
    }

    enum VariableType {
        NULL = 0,
        BOOLEAN = 1,
        INT = 2,
        DOUBLE = 3,
        STRING = 4,
        SFSOBJECT = 5,
        SFSARRAY = 6
    }

    class SFSUserVariable {

        isNull: boolean;
        isPrivate: boolean;
        name: string;
        type: VariableType;
        value: any;

        /**
         * Creates a new SFSUserVariable instance.
         * A SFSUserVariable is a custom value attached to a SFSUser object that gets automatically synchronized
         * between client and server on every change.
         * User Variables are particularly useful to store custom user data that must be "visible" to the other users,
         * such as a profile, a score, a status message, etc. User Variables can be set by means of the
         * SetUserVariablesRequest request; they support the following data types (also nested): boolean, number,
         * string, SFSObject, SFSArray. A User Variable can also be null.

         * @param {string} name The name of the User Variable.
         * @param value The value of the User Variable; it can also be null.
         * @param {VariableType} type The type id of the User Variable among those available in the VariableType
         * class. Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.
         */
        constructor(name: string, value: any, type?: VariableType);

        toString(): string;
    }

    class SFSRoomVariable extends SFSUserVariable {

        isPersistent: boolean;
        isPrivate: boolean;

        value: any;


        static fromSFSArray(data: SFSArray): SFSUserVariable;
    }

    interface Request {

    }
    class MessageRecipientMode {
        static readonly TO_USER: 0;
        static readonly TO_ROOM: 1;
        static readonly TO_GROUP: 2;
        static readonly TO_ZONE: 3;
        constructor(mode: 0 | 1 | 2 | 3, target: SFSUser | SFSRoom | string);
    }
    class AdminMessageRequest {
        constructor(message: string, recipientMode: MessageRecipientMode, params: SFSObject);
    }

    class SetUserVariablesRequest implements Request {
        constructor(userVariables: SFSUserVariable[]);
    }

    class LoginRequest implements Request {
        constructor(userName: string, password?: string, params?: any, zoneName?: string);
    }

    class JoinRoomRequest implements Request {
        constructor(room: number | string | SFSRoom, password?: string, roomIdToLeave?: number, asSpectator?: boolean);
    }

    class LeaveRoomRequest implements Request {
        constructor(room: SFSRoom);
    }

    class PublicMessageRequest implements Request {
        constructor(message: string, params?: SFSObject, targetRoom?: SFSRoom);
    }

    /**
     * Creates a new SubscribeRoomGroupRequest instance. The instance must be passed to the SmartFox.send()
     * method for the request to be performed.
     * This request allows the user to be notified of specific Room events even if he didn't join the Room from
     * which the events originated, provided the Room belongs to the subscribed Group.
     * If the subscription operation is successful, the current user receives a roomGroupSubscribe event;
     * otherwise the roomGroupSubscribeError event is fired.
     */
    class SubscribeRoomGroupRequest implements Request {
        /**
         * @param groupId The name of the Room Group to subscribe.
         */
        constructor(groupId: string);
    }

    /**
     * Creates a new UnsubscribeRoomGroupRequest instance. The instance must be passed to the SmartFox.send()
     * method for the request to be performed.
     * This request allows the user to stop being notified of specific Room events occurring in Rooms
     * belonging to the unsubscribed Group.
     * If the operation is successful, the current user receives a roomGroupUnsubscribe event; otherwise the
     * roomGroupUnsubscribeError event is fired.
     */
    class UnsubscribeRoomGroupRequest implements Request {
        /**
         * @param groupId The name of the Room Group to unsubscribe.
         */
        constructor(groupId: string);
    }

    /**
     * Sends a command to the server-side Extension attached to the Zone or to a Room.
     */
    class ExtensionRequest implements Request {
        /**
         * Creates a new ExtensionRequest instance. The instance must be passed to the SmartFox.send() method for the request to be performed.
         * This request is used to send custom commands from the client to a server-side Extension, be it a Zone-level or Room-level Extension. Viceversa, the extensionResponse event is used by the server to send Extension commands/responses to the client.
         *
         * @param extCmd The name of the command which identifies an action that should be executed by
         * the server-side Extension.
         * @param params An object containing custom data to be sent to the Extension. Can be null if no data
         * needs to be sent.
         * @param room If null, the specified command is sent to the current Zone server-side Extension;
         * if not null, the command is sent to the server-side Extension attached to the passed Room.
         */
        constructor(extCmd: string, params?: SFSObject, room?: SFSRoom);
    }

    class LogoutRequest implements Request {
        /**
         * Creates a new LogoutRequest instance. The instance must be passed to the SmartFox.send() method for the request to be performed.
         This request logs the user out of the current server Zone. The user is notified of the logout operation by means of the logout event. This doesn't shut down the connection, so the user will be able to login again in the same Zone or in a different one right after the confirmation event.

         The following example performs a logout from the current Zone:
         */
        constructor();
    }


    /**
     * The manager of the current user's Buddy List system.
     */
    class SFSBuddyManager {

    }

    /**
     * The manager of the client-side Rooms list.
     */
    class SFSRoomManager {

        /**
         * Retrieves a SFSRoom object from its id.
         * @param id The id of the Room.
         * @returns The object representing the requested Room; null if no SFSRoom object with the passed id exists in the Rooms list.
         */
        getRoomById(id): SFSRoom;

        /**
         * Indicates whether the specified Group has been subscribed by the client or not.
         * @param groupId
         * @returns {boolean}
         */
        containsGroup(groupId): boolean;

        /**
         * Retrieves the list of Rooms which are part of the specified Room Group.
         * @param groupId
         * @returns Array of SFSRoom The list of the available SFSRoom objects
         */
        getRoomListFromGroup(groupId): SFSRoom[];
    }

    /**
     * This class keeps track of all the users that are currently joined in the same Rooms of the current user.
     * It also provides utility methods to look for users by name and id.
     * @NOTE: developers never instantiate a UserManager manually: this is done by the SmartFoxServer 2X API
     * internally. A reference to the existing instance can be retrieved using the SmartFox.userManager property.
     */
    class SFSUserManager {

        /**
         * Retrieves a SFSUser object from its id property.
         * @param userId The id of the user to be found.
         * @returns The SFSUser object representing the user, or null if no user with the passed id exists in the local users list.
         */
        getUserById(userId): SFSUser;
    }


    enum ClientDisconnectionReason {
        IDLE = "idle",
        KICK = "kick",
        BAN = "ban",
        MANUAL = "manual",
        UNKNOWN = "unknown"
        // getReason(value: number): string;
    }

    class LoggerEvent {
        static readonly DEBUG: "debug";
        static readonly INFO: "info";
        static readonly WARNING: "warn";
        static readonly ERROR: "error";

        message: string;
    }

    interface LoggerEventMap {
        "debug": LoggerEvent;
        "info": LoggerEvent;
        "warn": LoggerEvent;
        "error": LoggerEvent;
    }

    /**
     * The internal logger used by the SmartFoxServer 2X client API.
     * You can get a reference to the Logger by means of the SmartFox.logger property.
     * Accessing the logger instance allows to control the client-side logging level by means of the setLevel() method.
     */
    interface Logger {
        enableConsoleOutput: boolean;
        enableEventDispatching: boolean;
        /**
         * Gets and sets the current logging level.
         * Debugging messages with a level lower than this value are not logged.
         * The available log levels are contained in the LogLevel class. The default value is LogLevel.INFO.
         */
        level: LogLevel;

        /**
         * Registers an event listener function that will receive notification of an event.
         * If you no longer need an event listener, remove it by calling the removeEventListener()
         * method, or memory issues could arise. In fact event listeners are not automatically removed from memory.
         * @param {LoggerEvent} evtType The type of event to listen to, among those available in the SFSEvent,
         * SFSBuddyEvent and LoggerEvent classes.
         * @param {() => any} callback The listener function that processes the event. This function should accept
         * an object as its only parameter, which in turn contains the event parameters.
         * @param scope The object that acts as a context for the event listener: it is the object that acts as a
         * "parent scope" for the callback function, thus providing context (i.e. access to variables and other mehtods)
         * to the function itself.
         */
        addEventListener<K extends keyof LoggerEventMap>(evtType: K, callback: (ev: LoggerEventMap[K]) => void, scope?: any): void;

        removeEventListener<K extends keyof LoggerEventMap>(evtType: K, callback: (ev: LoggerEventMap[K]) => void);

        debug(data: any): void;

        info(data: any): void;

        warn(data: any): void;

        error(data: any): void;
    }

    /**
     * The importance levels of logged messages.
     */
    enum LogLevel {
        /**
         * A DEBUG message is a fine-grained information on the client activity.
         */
        DEBUG,

        /**
         * An INFO message contains informations on the standard client activities.
         */
        INFO,

        /**
         * A WARN message is a warning caused by an unexpected behavior of the client.
         * Client operations are not compromised when a warning is raised.
         */
        WARN,

        /**
         * An ERROR message contains informations on a problem that occurred during the client activities.
         * Client operations might be compromised when an error is raised.
         */
        ERROR
    }

    class EventDispatcher {
        /**
         * Registers an event listener function that will receive notification of an event.
         * If you no longer need an event listener, remove it by calling the removeEventListener() method, or memory
         * problems could result. In fact event listeners are not automatically removed from memory.
         *
         * @param evtType The type of event to listen to, among those available in the SFSevent and SFSBuddyEvent classes.
         * @param listener The listener function that processes the event. This function should accept an object as its
         * only parameter, which in turn contains the event parameters.
         * @param scope The object that acts as a context for the event listener: it is the object that acts as a
         * "parent scope" for the callback function, thus providing context
         * (i.e. access to variables and other mehtods) to the function itself.
         */
        addEventListener<K extends keyof SmartFoxEventMap>(evtType: K, listener: (ev: SmartFoxEventMap[K]) => void, scope?: any): void;

        /**
         * Removes an event listener.
         *
         * @param evtType The type of event to remove, among those available in the SFSevent and SFSBuddyEvent classes.
         * @param listener The listener function to be removed.
         */
        removeEventListener<K extends keyof SmartFoxEventMap>(evtType: K, listener: (ev: SmartFoxEventMap[K]) => void): void;


        dispatchEvent<K extends keyof SmartFoxEventMap>(evtType: K, evtObj: SmartFoxEventMap[K]): void;
    }

    /**
     * The SmartFoxServer 2X JavaScript API main class.
     */
    class SmartFox extends EventDispatcher {

        /**
         * Creates a new SmartFox instance.
         * The SmartFox class is responsible for connecting the client to a SmartFoxServer instance and for dispatching all asynchronous events. Developers always interact with SmartFoxServer through this class.
         * For detailed informations please check our website: http://www.smartfoxserver.com.
         * @param config
         */
        constructor(config?: LoginConfig);

        buddyManager: SFSBuddyManager;

        /**
         * Returns the client configuration object passed during the SmartFox instance creation.
         */
        config: LoginConfig;

        /**
         * Indicates whether the client-server messages console debug is enabled or not.
         * If set to true, detailed debugging informations for all the incoming and outgoing messages are provided in the browser's debug console (if available).
         * Debugging can be enabled when instantiating the SmartFox class too by means of the configuration object.
         */
        debug: boolean;

        /**
         * Indicates whether the client is connected to the server or not.
         */
        isConnected: boolean;

        /**
         * Returns the object representing the last Room joined by the client, if any.
         * This property is null if no Room was joined.
         * NOTE: setting the lastJoinedRoom property manually can disrupt the API functioning. Use the JoinRoomRequest request to join a new Room instead.
         */
        lastJoinedRoom: SFSRoom;

        /**
         * Returns a reference to the internal Logger instance used by SmartFoxServer 2X.
         */
        logger: Logger;

        /**
         * Returns the maximum size of messages allowed by the server.
         * Any request exceeding this size will not be sent. The value is determined by the server configuration.
         */
        maxMessageSize: number;

        /**
         * Returns the SFSUser object representing the client itself when connected to a SmartFoxServer 2X instance.
         * This object is generated upon successful login only, so it is null if login was not performed yet.
         *
         * NOTE: setting the mySelf property manually can disrupt the API functioning.
         */
        mySelf: SFSUser;

        /**
         * Returns a reference to the Room Manager.
         * This manager is used internally by the SmartFoxServer 2X API; the reference returned by this property gives
         * access to the Rooms list and Groups, allowing interaction with SFSRoom objects.
         */
        roomManager: SFSRoomManager;

        /**
         * Returns the unique session token of the client.
         * The session token is a string sent by the server to the client after the initial handshake.
         * It is required as mean of identification when uploading files to the server (see specific documentation).
         */
        sessionToken: string;

        /**
         * Returns a reference to the User Manager.
         * This manager is used internally by the SmartFoxServer 2X API; the reference returned by this property
         * gives access to the users list, allowing interaction with SFSUser objects.
         */
        userManager: SFSUserManager;

        /**
         * Returns the current version of the SmartFoxServer 2X JavaScript API.
         */
        version: string;

       /**
         * Establishes a connection between the client and a SmartFoxServer 2X instance.
         * If no argument is passed, the client will use the settings passed during the SmartFox class instantiation.
         *
         * @param host The address of the server to connect to.
         * @param port The TCP port to connect to.
         * @param useSSL Use an encrypted SSL connection.
         *
         * @see SFSEvent.CONNECTION
         */
        connect(host?: string, port?: number, useSSL?: boolean): void;

        /**
         * Closes the connection between the client and the SmartFoxServer 2X instance.
         *
         * @see SFSEvent.CONNECTION_LOST
         */
        disconnect(): void;

        /**
         * Enables the automatic realtime monitoring of the lag between the client and the server (round robin).
         * When turned on, the pingPong event type is dispatched continuously, providing the average of the last ten measured lag values. The lag monitoring is automatically halted when the user logs out of a Zone or gets disconnected.
         * NOTE: the lag monitoring can be enabled after the login has been performed successfully only.
         * @param enabled The lag monitoring status: true to start the monitoring, false to stop it.
         * @param interval The amount of seconds to wait between each query (recommended 3-4s).
         * @param queueSize The amount of values stored temporarily and used to calculate the average lag.
         */
        enableLagMonitor(enabled: boolean, interval?: number, queueSize?: number): void

        /**
         * Returns a list of SFSRoom objects representing the Rooms currently joined by the client.
         *
         * NOTE: the same list is returned by the RoomManager.getJoinedRooms() method, accessible through the roomManager
         * property; this was replicated on the SmartFox class for handy access due to its usually frequent usage.
         *
         * @return The list of SFSRoom objects representing the Rooms joined by the client.
         */
        getJoinedRooms(): SFSRoom[];

        /**
         * Retrieves a SFSRoom object from its id.
         * NOTE: the same object is returned by the RoomManager.getRoomById() method, accessible through the roomManager
         * property; this was replicated on the SmartFox class for handy access due to its usually frequent usage.
         *
         * @param id The id of the Room.
         * @return The object representing the requested Room;
         * null if no SFSRoom object with the passed id exists in the Rooms list.
         */
        getRoomById(id: number): SFSRoom;

        /**
         * Retrieves a SFSRoom object from its name.
         * NOTE: the same object is returned by the RoomManager.getRoomByName() method, accessible through the roomManager
         * property; this was replicated on the SmartFox class for handy access due to its usually frequent usage.
         *
         * @param name The name of the Room.
         * @return The object representing the requested Room;
         * null if no SFSRoom object with the passed name exists in the Rooms list.
         */
        getRoomByName(name: string): SFSRoom;

        /**
         * Returns the list of SFSRoom objects representing the Rooms currently "watched" by the client.
         * The list contains all the Rooms that are currently joined and all the Rooms belonging to the Room Groups
         * that have been subscribed by the client.
         *
         * NOTE 1: at login time, the client automatically subscribes all the Room Groups specified in the Zone's Default
         * Room Groups setting.
         * NOTE 2: the same list is returned by the RoomManager.getRoomList() method, accessible through the roomManager
         * property; this was replicated on the SmartFox class for handy access due to its usually frequent usage.
         *
         * @return The list of SFSRoom objects representing the Rooms available on the client.
         */
        getRoomList(): SFSRoom[];

        /**
         * Retrieves the list of Rooms which are part of the specified Room Group.
         * NOTE: the same list is returned by the RoomManager.getRoomListFromGroup() method, accessible through the
         * roomManager property; this was replicated on the SmartFox class for handy access due to
         * its usually frequent usage.
         *
         * @param groupId The name of the Group.
         * @return The list of SFSRoom objects belonging to the passed Group.
         */
        getRoomListFromGroup(groupId: string): SFSRoom[];

        /**
         * Sends a request to the server.
         *
         * All the available request objects can be found under the Requests namespace.
         *
         * @param request A request object.
         */
        send(request: Request): void;

        /**
         * Allows to specify custom client details that will be used to gather statistics about the client platform
         * via the AdminTool's Analytics Module.
         * By default no details are sent and the client type is the generic "JavaScript".
         * NOTE: this method must be called before the connection is started. The length of the two strings combined
         * must be less than 512 characters.
         * @param {string} platformId An identification string for the client, like the browser name for example.
         * @param {string} version An additional string to describe the client version, like the browser
         * version for example.
         */
        setClientDetails(platformId: string, version: string): void;
    }

    class BaseVariable {
        readonly isNull: boolean;
        readonly name: string;
        readonly type: "null" | "boolean" | "int" | "double" | "string" | "SFSObject" | "SFSArray";
        readonly value: any;
    }

    class SFSBuddyVariable extends BaseVariable {
        /**
         * @param name The name of the Buddy Variable.
         * @param value  The value of the Buddy Variable; it can also be null.
         * @param type The type id of the Buddy Variable among those available in the VariableType class.
         * Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.

         Defaults to -1.
         */
        constructor(name: string,
                    value: boolean | number | SFSObject | SFSArray | null,
                    type?: number);

        static readonly OFFLINE_PREFIX: string;
        readonly isOffline: boolean;

        toString(): string;
    }

    class SFSBuddy {
        readonly id: number;
        readonly isBlocked: boolean;
        readonly isOnline: boolean;
        readonly isTemp: boolean;
        readonly name: string;
        readonly nickName: string | null;
        readonly state: string | null;

        containsVariable(varName: string): boolean;

        getOfflineVariables(): SFSBuddyVariable[];

        getOnlineVariables(): SFSBuddyVariable[];

        getVariable(varName: string): SFSBuddyVariable;

        getVariables(): SFSBuddyVariable[];

        toString(): string;
    }

    interface BuddyEventMap {
        "buddyListInit": BuddyListInitEvent;
        "buddyAdd": BuddyAddEvent;
        "buddyRemove": BuddyRemoveEvent;
        "buddyBlock": BuddyBlockEvent;
        "buddyError": BuddyErrorEvent;
        "buddyOnlineStateChange": BuddyOnlineStateChangeEvent;
        "buddyVariablesUpdate": BuddyVariablesUpdateEvent;
        "buddyMessage": BuddyMessageEvent;
    }

    class SFSBuddyEvent {
        static BUDDY_LIST_INIT: "buddyListInit";
        static BUDDY_ADD: "buddyAdd";
        static BUDDY_REMOVE: "buddyRemove";
        static BUDDY_BLOCK: "buddyBlock";
        static BUDDY_ERROR: "buddyError";
        static BUDDY_ONLINE_STATE_CHANGE: "buddyOnlineStateChange";
        static BUDDY_VARIABLES_UPDATE: "buddyVariablesUpdate";
        static BUDDY_MESSAGE: "buddyMessage";
    }

    interface BuddyAddEvent {
        buddy: SFSBuddy;
    }

    interface BuddyBlockEvent {
        buddy: SFSBuddy;
    }

    interface BuddyErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface BuddyListInitEvent {
        buddyList: SFSBuddy[];
        myVariables: SFSBuddyVariable[];
    }

    interface BuddyMessageEvent {
        buddy: SFSBuddy;
        isItMe: boolean;
        message: string;
        data: SFSObject;
    }

    interface BuddyOnlineStateChangeEvent {
        buddy: SFSBuddy;
        isItMe: boolean;
    }

    interface BuddyRemoveEvent {
        buddy: SFSBuddy;
    }

    interface BuddyVariablesUpdateEvent {
        buddy: SFSBuddy;
        isItMe: boolean;
        changedVars: string[];
    }

    interface AdminMessageEvent {
        sender: SFSUser;
        message: string;
        data: SFSObject;
    }

    interface ConnectionEvent {
        success: boolean;
    }

    interface ConnectionLostEvent {
        reason: ClientDisconnectionReason;
    }

    interface ExtensionResponseEvent {
        cmd: string;
        params: SFSObject;
        sourceRoom: number;
    }

    class SFSInvitation {
        readonly id: number;
        readonly invitee: SFSUser;
        readonly inviter: SFSUser;
        readonly params: SFSObject;
        readonly secondsForAnswer: number;
    }

    interface InvitationEvent {
        invitation: SFSInvitation;
    }

    interface InvitationReplyEvent {
        invitee: SFSUser;
        reply: number;
        data: SFSObject;
    }

    interface InvitationReplyErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface LoginEvent {
        user: SFSUser;
        data: SFSObject;
    }

    interface LoginErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface LogoutEvent {
    }

    class MMOItemVariable extends BaseVariable {
    }

    class MMORoom {
        // TODO
    }

    class MMOItem {
        readonly aoiEntryPoint: Vec3D;
        readonly id: number;

        containsVariable(varName: string): boolean;

        getVariable(varName: string): MMOItemVariable;

        getVariables(): MMOItemVariable[];

        toString(): string;
    }

    interface MMOItemVariablesUpdateEvent {
        room: MMORoom;
        mmoItem: MMOItem;
        changedVars: string[];
    }

    interface ModeratorMessageEvent {
        sender: SFSUser;
        message: string;
        data: SFSObject;
    }

    interface ObjectMessageEvent {
        sender: SFSUser;
        message: string;
    }

    interface PingPongEvent {
        lagValue: number;
    }

    interface PlayerToSpectatorEvent {
        room: SFSRoom;
        user: SFSUser;
    }

    interface PlayerToSpectatorErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface PrivateMessageEvent {
        sender: SFSUser;
        message: string;
        data: SFSObject;
    }

    interface ProximityListUpdateEvent {
        addedUsers: SFSUser[];
        removedUsers: SFSUser[];
        addedItems: MMOItem[];
        removedItems: MMOItem[];
    }

    interface PublicMessageEvent {
        room: SFSRoom;
        sender: SFSUser;
        message: string;
        data: SFSObject;
    }

    interface RoomAddEvent {
        room: SFSRoom;
    }

    interface RoomCapacityChangeEvent {
        room: SFSRoom;
    }

    interface RoomCapacityChangeErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface RoomCreationErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface RoomFindResultEvent {
        rooms: SFSRoom[];
    }

    interface RoomGroupSubscribeEvent {
        groupId: string;
        newRooms: SFSRoom[];
    }

    interface RoomGroupSubscribeErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface RoomGroupUnsubscribeEvent {
        groupId: string;
    }

    interface RoomGroupUnsubscribeErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface RoomJoinEvent {
        room: SFSRoom;
    }

    interface RoomJoinErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface RoomNameChangeEvent {
        room: SFSRoom;
        oldName: string;
    }

    interface RoomNameChangeErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface RoomPasswordStateChangeEvent {
        room: SFSRoom;
    }

    interface RoomPasswordStateChangeErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface RoomRemoveEvent {
        room: SFSRoom;
    }

    interface RoomVariablesUpdateEvent {
        room: SFSRoom;
        changedVars: string[];
    }

    interface SocketErrorEvent {
        errorMessage: string;
    }

    interface SpectatorToPlayerEvent {
        room: SFSRoom;
        user: SFSUser;
        playerId: number;
    }

    interface SpectatorToPlayerErrorEvent {
        errorMessage: string;
        errorCode: number;
    }

    interface UserCountChangeEvent {
        room: SFSRoom;
        uCount: number;
        sCount: number;
    }

    interface UserEnterRoomEvent {
        user: SFSUser;
        room: SFSRoom;
    }

    interface UserExitRoomEvent {
        user: SFSUser;
        room: SFSRoom;
    }

    interface UserFindResultEvent {
        users: SFSUser[];
    }

    interface UserVariablesUpdateEvent {
        user: SFSUser;
        changedVars: string[];
    }

    class Matcher {
        readonly symbol: string;
        readonly type: number;
    }
    class BoolMatch extends Matcher {
        static readonly EQUALS: BoolMatch;
        static readonly NOT_EQUALS: BoolMatch;
    }
    class NumberMatch extends Matcher {
        static readonly EQUALS: NumberMatch;
        static readonly GREATER_THAN: NumberMatch;
        static readonly GREATER_THAN_OR_EQUAL_TO: NumberMatch;
        static readonly LESS_THAN: NumberMatch;
        static readonly LESS_THAN_OR_EQUAL_TO: NumberMatch;
        static readonly NOT_EQUALS: NumberMatch;
    }
    class StringMatch extends Matcher {
        static readonly CONTAINS: StringMatch;
        static readonly ENDS_WITH: StringMatch;
        static readonly EQUALS: StringMatch;
        static readonly NOT_EQUALS: StringMatch;
        static readonly STARTS_WITH: StringMatch;
    }
    enum UserProperties {
        NAME = "${N}",
        IS_PLAYER = "${ISP}",
        IS_SPECTATOR = "${ISS}",
        IS_NPC = "${ISN}",
        PRIVILEGE_ID = "${PRID}",
        IS_IN_ANY_ROOM = "${IAR}"
    }
    enum RoomProperties {
        NAME = "${N}",
        GROUP_ID = "${G}",
        MAX_USERS = "${MXU}",
        MAX_SPECTATORS = "${MXS}",
        USER_COUNT = "${UC}",
        SPECTATOR_COUNT = "${SC}",
        IS_GAME = "${ISG}",
        IS_PRIVATE = "${ISP}",
        HAS_FREE_PLAYER_SLOTS = "${HFP}",
        IS_TYPE_SFSGAME = "${IST}"
    }
    class SFSErrorCodes {
        static setErrorMessage(code: number, message: string);
    }
}
