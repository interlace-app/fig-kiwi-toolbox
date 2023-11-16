export type MessageType =
  "JOIN_START" |
  "NODE_CHANGES" |
  "USER_CHANGES" |
  "JOIN_END" |
  "SIGNAL" |
  "STYLE" |
  "STYLE_SET" |
  "JOIN_START_SKIP_RELOAD" |
  "NOTIFY_SHOULD_UPGRADE" |
  "UPGRADE_DONE" |
  "UPGRADE_REFRESH" |
  "SCENE_GRAPH_QUERY" |
  "SCENE_GRAPH_REPLY" |
  "DIFF" |
  "CLIENT_BROADCAST" |
  "JOIN_START_JOURNALED" |
  "STREAM_START" |
  "STREAM_END" |
  "INTERACTIVE_SLIDE_CHANGE";

export type Axis =
  "X" |
  "Y";

export type Access =
  "READ_ONLY" |
  "READ_WRITE";

export type NodePhase =
  "CREATED" |
  "REMOVED";

export type WindingRule =
  "NONZERO" |
  "ODD";

export type NodeType =
  "NONE" |
  "DOCUMENT" |
  "CANVAS" |
  "GROUP" |
  "FRAME" |
  "BOOLEAN_OPERATION" |
  "VECTOR" |
  "STAR" |
  "LINE" |
  "ELLIPSE" |
  "RECTANGLE" |
  "REGULAR_POLYGON" |
  "ROUNDED_RECTANGLE" |
  "TEXT" |
  "SLICE" |
  "SYMBOL" |
  "INSTANCE" |
  "STICKY" |
  "SHAPE_WITH_TEXT" |
  "CONNECTOR" |
  "CODE_BLOCK" |
  "WIDGET" |
  "STAMP" |
  "MEDIA" |
  "HIGHLIGHT" |
  "SECTION" |
  "SECTION_OVERLAY" |
  "WASHI_TAPE" |
  "VARIABLE" |
  "TABLE" |
  "TABLE_CELL" |
  "VARIABLE_SET" |
  "SLIDE" |
  "ASSISTED_LAYOUT" |
  "INTERACTIVE_SLIDE_ELEMENT" |
  "VARIABLE_OVERRIDE" |
  "MODULE";

export type ShapeWithTextType =
  "SQUARE" |
  "ELLIPSE" |
  "DIAMOND" |
  "TRIANGLE_UP" |
  "TRIANGLE_DOWN" |
  "ROUNDED_RECTANGLE" |
  "PARALLELOGRAM_RIGHT" |
  "PARALLELOGRAM_LEFT" |
  "ENG_DATABASE" |
  "ENG_QUEUE" |
  "ENG_FILE" |
  "ENG_FOLDER" |
  "TRAPEZOID" |
  "PREDEFINED_PROCESS" |
  "SHIELD" |
  "DOCUMENT_SINGLE" |
  "DOCUMENT_MULTIPLE" |
  "MANUAL_INPUT" |
  "HEXAGON" |
  "CHEVRON" |
  "PENTAGON" |
  "OCTAGON" |
  "STAR" |
  "PLUS" |
  "ARROW_LEFT" |
  "ARROW_RIGHT" |
  "SUMMING_JUNCTION" |
  "OR" |
  "SPEECH_BUBBLE" |
  "INTERNAL_STORAGE";

export type BlendMode =
  "PASS_THROUGH" |
  "NORMAL" |
  "DARKEN" |
  "MULTIPLY" |
  "LINEAR_BURN" |
  "COLOR_BURN" |
  "LIGHTEN" |
  "SCREEN" |
  "LINEAR_DODGE" |
  "COLOR_DODGE" |
  "OVERLAY" |
  "SOFT_LIGHT" |
  "HARD_LIGHT" |
  "DIFFERENCE" |
  "EXCLUSION" |
  "HUE" |
  "SATURATION" |
  "COLOR" |
  "LUMINOSITY";

export type PaintType =
  "SOLID" |
  "GRADIENT_LINEAR" |
  "GRADIENT_RADIAL" |
  "GRADIENT_ANGULAR" |
  "GRADIENT_DIAMOND" |
  "IMAGE" |
  "EMOJI" |
  "VIDEO";

export type ImageScaleMode =
  "STRETCH" |
  "FIT" |
  "FILL" |
  "TILE";

export type EffectType =
  "INNER_SHADOW" |
  "DROP_SHADOW" |
  "FOREGROUND_BLUR" |
  "BACKGROUND_BLUR";

export type TextCase =
  "ORIGINAL" |
  "UPPER" |
  "LOWER" |
  "TITLE" |
  "SMALL_CAPS" |
  "SMALL_CAPS_FORCED";

export type TextDecoration =
  "NONE" |
  "UNDERLINE" |
  "STRIKETHROUGH";

export type LeadingTrim =
  "NONE" |
  "CAP_HEIGHT";

export type NumberUnits =
  "RAW" |
  "PIXELS" |
  "PERCENT";

export type ConstraintType =
  "MIN" |
  "CENTER" |
  "MAX" |
  "STRETCH" |
  "SCALE" |
  "FIXED_MIN" |
  "FIXED_MAX";

export type StrokeAlign =
  "CENTER" |
  "INSIDE" |
  "OUTSIDE";

export type StrokeCap =
  "NONE" |
  "ROUND" |
  "SQUARE" |
  "ARROW_LINES" |
  "ARROW_EQUILATERAL" |
  "DIAMOND_FILLED" |
  "TRIANGLE_FILLED" |
  "HIGHLIGHT" |
  "WASHI_TAPE_1" |
  "WASHI_TAPE_2" |
  "WASHI_TAPE_3" |
  "WASHI_TAPE_4" |
  "WASHI_TAPE_5" |
  "WASHI_TAPE_6" |
  "CIRCLE_FILLED";

export type StrokeJoin =
  "MITER" |
  "BEVEL" |
  "ROUND";

export type BooleanOperation =
  "UNION" |
  "INTERSECT" |
  "SUBTRACT" |
  "XOR";

export type TextAlignHorizontal =
  "LEFT" |
  "CENTER" |
  "RIGHT" |
  "JUSTIFIED";

export type TextAlignVertical =
  "TOP" |
  "CENTER" |
  "BOTTOM";

export type MouseCursor =
  "DEFAULT" |
  "CROSSHAIR" |
  "EYEDROPPER" |
  "HAND" |
  "PAINT_BUCKET" |
  "PEN" |
  "PENCIL" |
  "MARKER" |
  "ERASER" |
  "HIGHLIGHTER";

export type VectorMirror =
  "NONE" |
  "ANGLE" |
  "ANGLE_AND_LENGTH";

export type DashMode =
  "CLIP" |
  "STRETCH";

export type ImageType =
  "PNG" |
  "JPEG" |
  "SVG" |
  "PDF";

export type ExportConstraintType =
  "CONTENT_SCALE" |
  "CONTENT_WIDTH" |
  "CONTENT_HEIGHT";

export type LayoutGridType =
  "MIN" |
  "CENTER" |
  "STRETCH" |
  "MAX";

export type LayoutGridPattern =
  "STRIPES" |
  "GRID";

export type TextAutoResize =
  "NONE" |
  "WIDTH_AND_HEIGHT" |
  "HEIGHT";

export type TextTruncation =
  "DISABLED" |
  "ENDING";

export type StyleSetType =
  "PERSONAL" |
  "TEAM" |
  "CUSTOM" |
  "FREQUENCY" |
  "TEMPORARY";

export type StyleSetContentType =
  "SOLID" |
  "GRADIENT" |
  "IMAGE";

export type StackMode =
  "NONE" |
  "HORIZONTAL" |
  "VERTICAL";

export type StackAlign =
  "MIN" |
  "CENTER" |
  "MAX" |
  "BASELINE";

export type StackCounterAlign =
  "MIN" |
  "CENTER" |
  "MAX" |
  "STRETCH" |
  "AUTO" |
  "BASELINE";

export type StackJustify =
  "MIN" |
  "CENTER" |
  "MAX" |
  "SPACE_EVENLY" |
  "SPACE_BETWEEN";

export type StackSize =
  "FIXED" |
  "RESIZE_TO_FIT" |
  "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE";

export type StackPositioning =
  "AUTO" |
  "ABSOLUTE";

export type StackWrap =
  "NO_WRAP" |
  "WRAP";

export type StackCounterAlignContent =
  "AUTO" |
  "SPACE_BETWEEN";

export type ConnectionType =
  "NONE" |
  "INTERNAL_NODE" |
  "URL" |
  "BACK" |
  "CLOSE" |
  "SET_VARIABLE" |
  "UPDATE_MEDIA_RUNTIME" |
  "CONDITIONAL";

export type InteractionType =
  "ON_CLICK" |
  "AFTER_TIMEOUT" |
  "MOUSE_IN" |
  "MOUSE_OUT" |
  "ON_HOVER" |
  "MOUSE_DOWN" |
  "MOUSE_UP" |
  "ON_PRESS" |
  "NONE" |
  "DRAG" |
  "ON_KEY_DOWN" |
  "ON_VOICE" |
  "ON_MEDIA_HIT" |
  "ON_MEDIA_END" |
  "MOUSE_ENTER" |
  "MOUSE_LEAVE";

export type TransitionType =
  "INSTANT_TRANSITION" |
  "DISSOLVE" |
  "FADE" |
  "SLIDE_FROM_LEFT" |
  "SLIDE_FROM_RIGHT" |
  "SLIDE_FROM_TOP" |
  "SLIDE_FROM_BOTTOM" |
  "PUSH_FROM_LEFT" |
  "PUSH_FROM_RIGHT" |
  "PUSH_FROM_TOP" |
  "PUSH_FROM_BOTTOM" |
  "MOVE_FROM_LEFT" |
  "MOVE_FROM_RIGHT" |
  "MOVE_FROM_TOP" |
  "MOVE_FROM_BOTTOM" |
  "SLIDE_OUT_TO_LEFT" |
  "SLIDE_OUT_TO_RIGHT" |
  "SLIDE_OUT_TO_TOP" |
  "SLIDE_OUT_TO_BOTTOM" |
  "MOVE_OUT_TO_LEFT" |
  "MOVE_OUT_TO_RIGHT" |
  "MOVE_OUT_TO_TOP" |
  "MOVE_OUT_TO_BOTTOM" |
  "MAGIC_MOVE" |
  "SMART_ANIMATE" |
  "SCROLL_ANIMATE";

export type EasingType =
  "IN_CUBIC" |
  "OUT_CUBIC" |
  "INOUT_CUBIC" |
  "LINEAR" |
  "IN_BACK_CUBIC" |
  "OUT_BACK_CUBIC" |
  "INOUT_BACK_CUBIC" |
  "CUSTOM_CUBIC" |
  "SPRING" |
  "GENTLE_SPRING" |
  "CUSTOM_SPRING" |
  "SPRING_PRESET_ONE" |
  "SPRING_PRESET_TWO" |
  "SPRING_PRESET_THREE";

export type ScrollDirection =
  "NONE" |
  "HORIZONTAL" |
  "VERTICAL" |
  "BOTH";

export type ScrollContractedState =
  "EXPANDED" |
  "CONTRACTED";

export type FontVariantNumericFigure =
  "NORMAL" |
  "LINING" |
  "OLDSTYLE";

export type FontVariantNumericSpacing =
  "NORMAL" |
  "PROPORTIONAL" |
  "TABULAR";

export type FontVariantNumericFraction =
  "NORMAL" |
  "DIAGONAL" |
  "STACKED";

export type FontVariantCaps =
  "NORMAL" |
  "SMALL" |
  "ALL_SMALL" |
  "PETITE" |
  "ALL_PETITE" |
  "UNICASE" |
  "TITLING";

export type FontVariantPosition =
  "NORMAL" |
  "SUB" |
  "SUPER";

export type FontStyle =
  "NORMAL" |
  "ITALIC";

export type SemanticWeight =
  "NORMAL" |
  "BOLD";

export type SemanticItalic =
  "NORMAL" |
  "ITALIC";

export type OpenTypeFeature =
  "PCAP" |
  "C2PC" |
  "CASE" |
  "CPSP" |
  "TITL" |
  "UNIC" |
  "ZERO" |
  "SINF" |
  "ORDN" |
  "AFRC" |
  "DNOM" |
  "NUMR" |
  "LIGA" |
  "CLIG" |
  "DLIG" |
  "HLIG" |
  "RLIG" |
  "AALT" |
  "CALT" |
  "RCLT" |
  "SALT" |
  "RVRN" |
  "VERT" |
  "SWSH" |
  "CSWH" |
  "NALT" |
  "CCMP" |
  "STCH" |
  "HIST" |
  "SIZE" |
  "ORNM" |
  "ITAL" |
  "RAND" |
  "DTLS" |
  "FLAC" |
  "MGRK" |
  "SSTY" |
  "KERN" |
  "FWID" |
  "HWID" |
  "HALT" |
  "TWID" |
  "QWID" |
  "PWID" |
  "JUST" |
  "LFBD" |
  "OPBD" |
  "RTBD" |
  "PALT" |
  "PKNA" |
  "LTRA" |
  "LTRM" |
  "RTLA" |
  "RTLM" |
  "ABRV" |
  "ABVM" |
  "ABVS" |
  "VALT" |
  "VHAL" |
  "BLWF" |
  "BLWM" |
  "BLWS" |
  "AKHN" |
  "CJCT" |
  "CFAR" |
  "CPCT" |
  "CURS" |
  "DIST" |
  "EXPT" |
  "FALT" |
  "FINA" |
  "FIN2" |
  "FIN3" |
  "HALF" |
  "HALN" |
  "HKNA" |
  "HNGL" |
  "HOJO" |
  "INIT" |
  "ISOL" |
  "JP78" |
  "JP83" |
  "JP90" |
  "JP04" |
  "LJMO" |
  "LOCL" |
  "MARK" |
  "MEDI" |
  "MED2" |
  "MKMK" |
  "NLCK" |
  "NUKT" |
  "PREF" |
  "PRES" |
  "VPAL" |
  "PSTF" |
  "PSTS" |
  "RKRF" |
  "RPHF" |
  "RUBY" |
  "SMPL" |
  "TJMO" |
  "TNAM" |
  "TRAD" |
  "VATU" |
  "VJMO" |
  "VKNA" |
  "VKRN" |
  "VRTR" |
  "VRT2" |
  "SS01" |
  "SS02" |
  "SS03" |
  "SS04" |
  "SS05" |
  "SS06" |
  "SS07" |
  "SS08" |
  "SS09" |
  "SS10" |
  "SS11" |
  "SS12" |
  "SS13" |
  "SS14" |
  "SS15" |
  "SS16" |
  "SS17" |
  "SS18" |
  "SS19" |
  "SS20" |
  "CV01" |
  "CV02" |
  "CV03" |
  "CV04" |
  "CV05" |
  "CV06" |
  "CV07" |
  "CV08" |
  "CV09" |
  "CV10" |
  "CV11" |
  "CV12" |
  "CV13" |
  "CV14" |
  "CV15" |
  "CV16" |
  "CV17" |
  "CV18" |
  "CV19" |
  "CV20" |
  "CV21" |
  "CV22" |
  "CV23" |
  "CV24" |
  "CV25" |
  "CV26" |
  "CV27" |
  "CV28" |
  "CV29" |
  "CV30" |
  "CV31" |
  "CV32" |
  "CV33" |
  "CV34" |
  "CV35" |
  "CV36" |
  "CV37" |
  "CV38" |
  "CV39" |
  "CV40" |
  "CV41" |
  "CV42" |
  "CV43" |
  "CV44" |
  "CV45" |
  "CV46" |
  "CV47" |
  "CV48" |
  "CV49" |
  "CV50" |
  "CV51" |
  "CV52" |
  "CV53" |
  "CV54" |
  "CV55" |
  "CV56" |
  "CV57" |
  "CV58" |
  "CV59" |
  "CV60" |
  "CV61" |
  "CV62" |
  "CV63" |
  "CV64" |
  "CV65" |
  "CV66" |
  "CV67" |
  "CV68" |
  "CV69" |
  "CV70" |
  "CV71" |
  "CV72" |
  "CV73" |
  "CV74" |
  "CV75" |
  "CV76" |
  "CV77" |
  "CV78" |
  "CV79" |
  "CV80" |
  "CV81" |
  "CV82" |
  "CV83" |
  "CV84" |
  "CV85" |
  "CV86" |
  "CV87" |
  "CV88" |
  "CV89" |
  "CV90" |
  "CV91" |
  "CV92" |
  "CV93" |
  "CV94" |
  "CV95" |
  "CV96" |
  "CV97" |
  "CV98" |
  "CV99";

export type PrototypeDeviceType =
  "NONE" |
  "PRESET" |
  "CUSTOM" |
  "PRESENTATION";

export type DeviceRotation =
  "NONE" |
  "CCW_90";

export type OverlayPositionType =
  "CENTER" |
  "TOP_LEFT" |
  "TOP_CENTER" |
  "TOP_RIGHT" |
  "BOTTOM_LEFT" |
  "BOTTOM_CENTER" |
  "BOTTOM_RIGHT" |
  "MANUAL";

export type OverlayBackgroundInteraction =
  "NONE" |
  "CLOSE_ON_CLICK_OUTSIDE";

export type OverlayBackgroundType =
  "NONE" |
  "SOLID_COLOR";

export type NavigationType =
  "NAVIGATE" |
  "OVERLAY" |
  "SWAP" |
  "SWAP_STATE" |
  "SCROLL_TO";

export type ExportColorProfile =
  "DOCUMENT" |
  "SRGB" |
  "DISPLAY_P3_V4";

export type ExportSVGIDMode =
  "IF_NEEDED" |
  "ALWAYS";

export type StyleType =
  "NONE" |
  "FILL" |
  "STROKE" |
  "TEXT" |
  "EFFECT" |
  "EXPORT" |
  "GRID";

export type ScrollBehavior =
  "SCROLLS" |
  "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME" |
  "STICKY_SCROLLS";

export type ConnectorMagnet =
  "NONE" |
  "AUTO" |
  "TOP" |
  "LEFT" |
  "BOTTOM" |
  "RIGHT" |
  "CENTER" |
  "AUTO_HORIZONTAL";

export type ConnectorTextSection =
  "MIDDLE_TO_START" |
  "MIDDLE_TO_END";

export type ConnectorLineStyle =
  "ELBOWED" |
  "STRAIGHT" |
  "CURVED";

export type ConnectorType =
  "MANUAL" |
  "DIAGRAM";

export type AnnotationPropertyType =
  "FILL" |
  "STROKE" |
  "WIDTH" |
  "HEIGHT" |
  "MIN_WIDTH" |
  "MIN_HEIGHT" |
  "MAX_WIDTH" |
  "MAX_HEIGHT" |
  "STROKE_WIDTH" |
  "CORNER_RADIUS" |
  "EFFECT" |
  "TEXT_STYLE" |
  "TEXT_ALIGN_HORIZONTAL" |
  "FONT_FAMILY" |
  "FONT_SIZE" |
  "FONT_WEIGHT" |
  "LINE_HEIGHT" |
  "LETTER_SPACING" |
  "STACK_SPACING" |
  "STACK_PADDING" |
  "STACK_MODE" |
  "STACK_ALIGNMENT" |
  "OPACITY";

export type AnnotationMeasurementNodeSide =
  "TOP" |
  "BOTTOM" |
  "LEFT" |
  "RIGHT";

export type EditorType =
  "DESIGN" |
  "WHITEBOARD" |
  "SLIDES";

export type MaskType =
  "ALPHA" |
  "OUTLINE" |
  "LUMINANCE";

export type ModuleType =
  "NONE" |
  "SINGLE_NODE" |
  "MULTI_NODE";

export type SectionStatus =
  "NONE" |
  "BUILD";

export type MediaAction =
  "PLAY" |
  "PAUSE" |
  "TOGGLE_PLAY_PAUSE" |
  "MUTE" |
  "UNMUTE" |
  "TOGGLE_MUTE_UNMUTE" |
  "SKIP_FORWARD" |
  "SKIP_BACKWARD" |
  "SKIP_TO";

export type VariableField =
  "MISSING" |
  "CORNER_RADIUS" |
  "PARAGRAPH_SPACING" |
  "PARAGRAPH_INDENT" |
  "STROKE_WEIGHT" |
  "STACK_SPACING" |
  "STACK_PADDING_LEFT" |
  "STACK_PADDING_TOP" |
  "STACK_PADDING_RIGHT" |
  "STACK_PADDING_BOTTOM" |
  "VISIBLE" |
  "TEXT_DATA" |
  "WIDTH" |
  "HEIGHT" |
  "RECTANGLE_TOP_LEFT_CORNER_RADIUS" |
  "RECTANGLE_TOP_RIGHT_CORNER_RADIUS" |
  "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS" |
  "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS" |
  "BORDER_TOP_WEIGHT" |
  "BORDER_BOTTOM_WEIGHT" |
  "BORDER_LEFT_WEIGHT" |
  "BORDER_RIGHT_WEIGHT" |
  "VARIANT_PROPERTIES" |
  "STACK_COUNTER_SPACING" |
  "MIN_WIDTH" |
  "MAX_WIDTH" |
  "MIN_HEIGHT" |
  "MAX_HEIGHT" |
  "FONT_FAMILY" |
  "FONT_STYLE" |
  "FONT_VARIATIONS" |
  "OPACITY";

export type AgendaItemType =
  "NODE" |
  "BLOCK";

export type DiagramLayoutRuleType =
  "NONE" |
  "TREE";

export type DiagramLayoutPaused =
  "NO" |
  "YES";

export type ComponentPropNodeField =
  "VISIBLE" |
  "TEXT_DATA" |
  "OVERRIDDEN_SYMBOL_ID" |
  "INHERIT_FILL_STYLE_ID";

export type ComponentPropType =
  "BOOL" |
  "TEXT" |
  "COLOR" |
  "INSTANCE_SWAP";

export type InstanceSwapPreferredValueType =
  "COMPONENT" |
  "STATE_GROUP";

export type WidgetEvent =
  "MOUSE_DOWN" |
  "CLICK" |
  "TEXT_EDIT_END" |
  "ATTACHED_STICKABLES_CHANGED" |
  "STUCK_STATUS_CHANGED";

export type WidgetInputBehavior =
  "WRAP" |
  "TRUNCATE" |
  "MULTILINE";

export type WidgetPropertyMenuItemType =
  "ACTION" |
  "SEPARATOR" |
  "COLOR" |
  "DROPDOWN" |
  "COLOR_SELECTOR" |
  "TOGGLE" |
  "LINK";

export type CodeBlockLanguage =
  "TYPESCRIPT" |
  "CPP" |
  "RUBY" |
  "CSS" |
  "JAVASCRIPT" |
  "HTML" |
  "JSON" |
  "GRAPHQL" |
  "PYTHON" |
  "GO" |
  "SQL" |
  "SWIFT" |
  "KOTLIN" |
  "RUST" |
  "BASH" |
  "PLAINTEXT";

export type InternalEnumForTest =
  "OLD";

export type BulletType =
  "ORDERED" |
  "UNORDERED" |
  "INDENT" |
  "NO_LIST";

export type LineType =
  "PLAIN" |
  "ORDERED_LIST" |
  "UNORDERED_LIST" |
  "BLOCKQUOTE" |
  "HEADER";

export type SourceDirectionality =
  "AUTO" |
  "LTR" |
  "RTL";

export type Directionality =
  "LTR" |
  "RTL";

export type DirectionalityIntent =
  "IMPLICIT" |
  "EXPLICIT";

export type TriggerDevice =
  "KEYBOARD" |
  "UNKNOWN_CONTROLLER" |
  "XBOX_ONE" |
  "PS4" |
  "SWITCH_PRO";

export type MentionSource =
  "DEFAULT" |
  "COPY_DUPLICATE";

export type TransitionDirection =
  "FORWARD" |
  "REVERSE";

export type PlaybackChangePhase =
  "INITIATED" |
  "ABORTED" |
  "COMMITTED";

export type Heartbeat =
  "FOREGROUND" |
  "BACKGROUND";

export type SceneGraphQueryBehavior =
  "DEFAULT" |
  "CONTAINING_PAGE";

export type RichMediaType =
  "ANIMATED_IMAGE" |
  "VIDEO";

export type VariableDataType =
  "BOOLEAN" |
  "FLOAT" |
  "STRING" |
  "ALIAS" |
  "COLOR" |
  "EXPRESSION" |
  "MAP" |
  "SYMBOL_ID" |
  "FONT_STYLE";

export type VariableResolvedDataType =
  "BOOLEAN" |
  "FLOAT" |
  "STRING" |
  "COLOR" |
  "MAP" |
  "SYMBOL_ID";

export type ExpressionFunction =
  "ADDITION" |
  "SUBTRACTION" |
  "RESOLVE_VARIANT" |
  "MULTIPLY" |
  "DIVIDE" |
  "EQUALS" |
  "NOT_EQUAL" |
  "LESS_THAN" |
  "LESS_THAN_OR_EQUAL" |
  "GREATER_THAN" |
  "GREATER_THAN_OR_EQUAL" |
  "AND" |
  "OR" |
  "NOT" |
  "STRINGIFY" |
  "TERNARY" |
  "VAR_MODE_LOOKUP" |
  "NEGATE";

export type VariableScope =
  "ALL_SCOPES" |
  "TEXT_CONTENT" |
  "CORNER_RADIUS" |
  "WIDTH_HEIGHT" |
  "GAP" |
  "ALL_FILLS" |
  "FRAME_FILL" |
  "SHAPE_FILL" |
  "TEXT_FILL" |
  "STROKE" |
  "STROKE_FLOAT" |
  "EFFECT_FLOAT" |
  "EFFECT_COLOR" |
  "OPACITY";

export type CodeSyntaxPlatform =
  "WEB" |
  "ANDROID" |
  "iOS";

export type HTMLTag =
  "AUTO" |
  "ARTICLE" |
  "SECTION" |
  "NAV" |
  "ASIDE" |
  "H1" |
  "H2" |
  "H3" |
  "H4" |
  "H5" |
  "H6" |
  "HGROUP" |
  "HEADER" |
  "FOOTER" |
  "ADDRESS" |
  "P" |
  "HR" |
  "PRE" |
  "BLOCKQUOTE" |
  "OL" |
  "UL" |
  "MENU" |
  "LI" |
  "DL" |
  "DT" |
  "DD" |
  "FIGURE" |
  "FIGCAPTION" |
  "MAIN" |
  "DIV" |
  "A" |
  "EM" |
  "STRONG" |
  "SMALL" |
  "S" |
  "CITE" |
  "Q" |
  "DFN" |
  "ABBR" |
  "RUBY" |
  "RT" |
  "RP" |
  "DATA" |
  "TIME" |
  "CODE" |
  "VAR" |
  "SAMP" |
  "KBD" |
  "SUB" |
  "SUP" |
  "I" |
  "B" |
  "U" |
  "MARK" |
  "BDI" |
  "BDO" |
  "SPAN" |
  "BR" |
  "WBR" |
  "PICTURE" |
  "SOURCE" |
  "IMG" |
  "FORM" |
  "LABEL" |
  "INPUT" |
  "BUTTON" |
  "SELECT" |
  "DATALIST" |
  "OPTGROUP" |
  "OPTION" |
  "TEXTAREA" |
  "OUTPUT" |
  "PROGRESS" |
  "METER" |
  "FIELDSET" |
  "LEGEND";

export type ARIARole =
  "AUTO" |
  "NONE" |
  "APPLICATION" |
  "BANNER" |
  "COMPLEMENTARY" |
  "CONTENTINFO" |
  "FORM" |
  "MAIN" |
  "NAVIGATION" |
  "REGION" |
  "SEARCH" |
  "SEPARATOR" |
  "ARTICLE" |
  "COLUMNHEADER" |
  "DEFINITION" |
  "DIRECTORY" |
  "DOCUMENT" |
  "GROUP" |
  "HEADING" |
  "IMG" |
  "LIST" |
  "LISTITEM" |
  "MATH" |
  "NOTE" |
  "PRESENTATION" |
  "ROW" |
  "ROWGROUP" |
  "ROWHEADER" |
  "TABLE" |
  "TOOLBAR" |
  "BUTTON" |
  "CHECKBOX" |
  "GRIDCELL" |
  "LINK" |
  "MENUITEM" |
  "MENUITEMCHECKBOX" |
  "MENUITEMRADIO" |
  "OPTION" |
  "PROGRESSBAR" |
  "RADIO" |
  "SCROLLBAR" |
  "SLIDER" |
  "SPINBUTTON" |
  "TAB" |
  "TABPANEL" |
  "TEXTBOX" |
  "TREEITEM" |
  "COMBOBOX" |
  "GRID" |
  "LISTBOX" |
  "MENU" |
  "MENUBAR" |
  "RADIOGROUP" |
  "TABLIST" |
  "TREE" |
  "TREEGRID" |
  "TOOLTIP" |
  "ALERT" |
  "LOG" |
  "MARQUEE" |
  "STATUS" |
  "TIMER" |
  "ALERTDIALOG" |
  "DIALOG" |
  "SEARCHBOX" |
  "SWITCH" |
  "BLOCKQUOTE" |
  "CAPTION" |
  "CELL" |
  "DELETION" |
  "EMPHASIS" |
  "FEED" |
  "FIGURE" |
  "GENERIC" |
  "INSERTION" |
  "METER" |
  "PARAGRAPH" |
  "STRONG" |
  "SUBSCRIPT" |
  "SUPERSCRIPT" |
  "TERM" |
  "TIME" |
  "IMAGE" |
  "HEADING_1" |
  "HEADING_2" |
  "HEADING_3" |
  "HEADING_4" |
  "HEADING_5" |
  "HEADING_6" |
  "HEADER" |
  "FOOTER" |
  "SIDEBAR" |
  "SECTION" |
  "MAINCONTENT" |
  "TABLE_CELL" |
  "WIDGET";

export type ColorProfile =
  "SRGB" |
  "DISPLAY_P3";

export type DocumentColorProfile =
  "LEGACY" |
  "SRGB" |
  "DISPLAY_P3";

export type ChildReadingDirection =
  "NONE" |
  "LEFT_TO_RIGHT" |
  "RIGHT_TO_LEFT";

export type ARIAAttributeDataType =
  "BOOLEAN" |
  "STRING" |
  "FLOAT" |
  "INT" |
  "STRING_LIST";

export type EditScopeType =
  "INVALID" |
  "TEST_SETUP" |
  "USER" |
  "PLUGIN" |
  "SYSTEM" |
  "REST_API";

export interface GUID {
  sessionID: number;
  localID: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Vector {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ColorStop {
  color: Color;
  position: number;
}

export interface Matrix {
  m00: number;
  m01: number;
  m02: number;
  m10: number;
  m11: number;
  m12: number;
}

export interface ParentIndex {
  guid: GUID;
  position: string;
}

export interface Number {
  value: number;
  units: NumberUnits;
}

export interface FontName {
  family: string;
  style: string;
  postscript: string;
}

export interface ExportConstraint {
  type: ExportConstraintType;
  value: number;
}

export interface GUIDMapping {
  from: GUID;
  to: GUID;
}

export interface Blob {
  bytes: Uint8Array;
}

export interface Image {
  hash?: Uint8Array;
  name?: string;
  dataBlob?: number;
}

export interface Video {
  hash?: Uint8Array;
  s3Url?: string;
}

export interface FilterColorAdjust {
  tint: number;
  shadows: number;
  highlights: number;
  detail: number;
  exposure: number;
  vignette: number;
  temperature: number;
  vibrance: number;
}

export interface PaintFilterMessage {
  tint?: number;
  shadows?: number;
  highlights?: number;
  detail?: number;
  exposure?: number;
  vignette?: number;
  temperature?: number;
  vibrance?: number;
  contrast?: number;
  brightness?: number;
}

export interface Paint {
  type?: PaintType;
  color?: Color;
  opacity?: number;
  visible?: boolean;
  blendMode?: BlendMode;
  stops?: ColorStop[];
  transform?: Matrix;
  image?: Image;
  imageThumbnail?: Image;
  animatedImage?: Image;
  animationFrame?: number;
  imageScaleMode?: ImageScaleMode;
  imageShouldColorManage?: boolean;
  rotation?: number;
  scale?: number;
  filterColorAdjust?: FilterColorAdjust;
  paintFilter?: PaintFilterMessage;
  emojiCodePoints?: number[];
  video?: Video;
  originalImageWidth?: number;
  originalImageHeight?: number;
  colorVar?: VariableData;
}

export interface FontMetaData {
  key?: FontName;
  fontLineHeight?: number;
  fontDigest?: Uint8Array;
  fontStyle?: FontStyle;
  fontWeight?: number;
}

export interface FontVariation {
  axisTag?: number;
  axisName?: string;
  value?: number;
}

export interface TextData {
  characters?: string;
  characterStyleIDs?: number[];
  styleOverrideTable?: NodeChange[];
  layoutSize?: Vector;
  baselines?: Baseline[];
  glyphs?: Glyph[];
  decorations?: Decoration[];
  blockquotes?: Blockquote[];
  layoutVersion?: number;
  fontMetaData?: FontMetaData[];
  fallbackFonts?: FontName[];
  hyperlinkBoxes?: HyperlinkBox[];
  lines?: TextLineData[];
  truncationStartIndex?: number;
  truncatedHeight?: number;
  logicalIndexToCharacterOffsetMap?: number[];
  minContentHeight?: number;
  mentionBoxes?: MentionBox[];
  derivedLines?: DerivedTextLineData[];
}

export interface DerivedTextData {
  layoutSize?: Vector;
  baselines?: Baseline[];
  glyphs?: Glyph[];
  decorations?: Decoration[];
  blockquotes?: Blockquote[];
  fontMetaData?: FontMetaData[];
  hyperlinkBoxes?: HyperlinkBox[];
  truncationStartIndex?: number;
  truncatedHeight?: number;
  logicalIndexToCharacterOffsetMap?: number[];
  mentionBoxes?: MentionBox[];
  derivedLines?: DerivedTextLineData[];
}

export interface HyperlinkBox {
  bounds?: Rect;
  url?: string;
  guid?: GUID;
  hyperlinkID?: number;
}

export interface MentionBox {
  bounds?: Rect;
  startIndex?: number;
  endIndex?: number;
  isValid?: boolean;
  mentionKey?: number;
}

export interface Baseline {
  position?: Vector;
  width?: number;
  lineY?: number;
  lineHeight?: number;
  lineAscent?: number;
  ignoreLeadingTrim?: number;
  firstCharacter?: number;
  endCharacter?: number;
}

export interface Glyph {
  commandsBlob?: number;
  position?: Vector;
  styleID?: number;
  fontSize?: number;
  firstCharacter?: number;
  advance?: number;
  emojiCodePoints?: number[];
}

export interface Decoration {
  rects?: Rect[];
  styleID?: number;
}

export interface Blockquote {
  verticalBar?: Rect;
  quoteMarkBounds?: Rect;
  styleID?: number;
}

export interface VectorData {
  vectorNetworkBlob?: number;
  normalizedSize?: Vector;
  styleOverrideTable?: NodeChange[];
}

export interface GUIDPath {
  guids?: GUID[];
}

export interface SymbolData {
  symbolID?: GUID;
  symbolOverrides?: NodeChange[];
  uniformScaleFactor?: number;
}

export interface GUIDPathMapping {
  id?: GUID;
  path?: GUIDPath;
}

export interface NodeGenerationData {
  overrides?: NodeChange[];
  useFineGrainedSyncing?: boolean;
  diffOnlyRemovals?: NodeChange[];
}

export interface DerivedImmutableFrameData {
  overrides?: NodeChange[];
  version?: number;
}

export interface AssetIdMap {
  entries?: AssetIdEntry[];
}

export interface AssetIdEntry {
  assetKey?: string;
  assetId?: AssetId;
}

export interface AssetRef {
  key?: string;
  version?: string;
}

export interface AssetId {
  guid?: GUID;
  assetRef?: AssetRef;
}

export interface StateGroupId {
  guid?: GUID;
  assetRef?: AssetRef;
}

export interface StyleId {
  guid?: GUID;
  assetRef?: AssetRef;
}

export interface SymbolId {
  guid?: GUID;
  assetRef?: AssetRef;
}

export interface VariableID {
  guid?: GUID;
  assetRef?: AssetRef;
}

export interface VariableOverrideId {
  guid?: GUID;
  assetRef?: AssetRef;
}

export interface VariableSetID {
  guid?: GUID;
  assetRef?: AssetRef;
}

export interface ThemeID {
  guid?: GUID;
  assetRef?: AssetRef;
}

export interface SlideThemeData {
  themeID?: ThemeID;
  version?: string;
}

export interface SharedSymbolReference {
  fileKey?: string;
  symbolID?: GUID;
  versionHash?: string;
  guidPathMappings?: GUIDPathMapping[];
  bytes?: Uint8Array;
  libraryGUIDToSubscribingGUID?: GUIDMapping[];
  componentKey?: string;
  unflatteningMappings?: GUIDPathMapping[];
  isUnflattened?: boolean;
}

export interface SharedComponentMasterData {
  componentKey?: string;
  publishingGUIDPathToTeamLibraryGUID?: GUIDPathMapping[];
  isUnflattened?: boolean;
}

export interface InstanceOverrideStash {
  overridePathOfSwappedInstance?: GUIDPath;
  componentKey?: string;
  overrides?: NodeChange[];
}

export interface InstanceOverrideStashV2 {
  overridePathOfSwappedInstance?: GUIDPath;
  localSymbolID?: GUID;
  overrides?: NodeChange[];
}

export interface Effect {
  type?: EffectType;
  color?: Color;
  offset?: Vector;
  radius?: number;
  visible?: boolean;
  blendMode?: BlendMode;
  spread?: number;
  showShadowBehindNode?: boolean;
  radiusVar?: VariableData;
  colorVar?: VariableData;
  spreadVar?: VariableData;
  xVar?: VariableData;
  yVar?: VariableData;
}

export interface TransitionInfo {
  type?: TransitionType;
  duration?: number;
}

export interface PrototypeDevice {
  type?: PrototypeDeviceType;
  size?: Vector;
  presetIdentifier?: string;
  rotation?: DeviceRotation;
}

export interface OverlayBackgroundAppearance {
  backgroundType?: OverlayBackgroundType;
  backgroundColor?: Color;
}

export interface ExportSettings {
  suffix?: string;
  imageType?: ImageType;
  constraint?: ExportConstraint;
  svgDataName?: boolean;
  svgIDMode?: ExportSVGIDMode;
  svgOutlineText?: boolean;
  contentsOnly?: boolean;
  svgForceStrokeMasks?: boolean;
  useAbsoluteBounds?: boolean;
  colorProfile?: ExportColorProfile;
}

export interface LayoutGrid {
  type?: LayoutGridType;
  axis?: Axis;
  visible?: boolean;
  numSections?: number;
  offset?: number;
  sectionSize?: number;
  gutterSize?: number;
  color?: Color;
  pattern?: LayoutGridPattern;
  numSectionsVar?: VariableData;
  offsetVar?: VariableData;
  sectionSizeVar?: VariableData;
  gutterSizeVar?: VariableData;
}

export interface Guide {
  axis?: Axis;
  offset?: number;
  guid?: GUID;
}

export interface Path {
  windingRule?: WindingRule;
  commandsBlob?: number;
  styleID?: number;
}

export interface SharedStyleReference {
  styleKey?: string;
  versionHash?: string;
}

export interface SharedStyleMasterData {
  styleKey?: string;
  sortPosition?: string;
  fileKey?: string;
}

export interface ArcData {
  startingAngle?: number;
  endingAngle?: number;
  innerRadius?: number;
}

export interface SymbolLink {
  uri?: string;
  displayName?: string;
  displayText?: string;
}

export interface PluginData {
  pluginID?: string;
  value?: string;
  key?: string;
}

export interface PluginRelaunchData {
  pluginID?: string;
  message?: string;
  command?: string;
  isDeleted?: boolean;
}

export interface MultiplayerFieldVersion {
  counter?: number;
  sessionID?: number;
}

export interface ConnectorEndpoint {
  endpointNodeID?: GUID;
  position?: Vector;
  magnet?: ConnectorMagnet;
}

export interface ConnectorControlPoint {
  position?: Vector;
  axis?: Vector;
}

export interface ConnectorTextMidpoint {
  section?: ConnectorTextSection;
  offset?: number;
}

export interface AnnotationProperty {
  type?: AnnotationPropertyType;
}

export interface Annotation {
  label?: string;
  properties?: AnnotationProperty[];
}

export interface AnnotationMeasurement {
  id?: GUID;
  fromNode?: GUID;
  toNode?: GUID;
  fromNodeSide?: AnnotationMeasurementNodeSide;
  toSameSide?: boolean;
  innerOffsetRelative?: number;
  outerOffsetFixed?: number;
}

export interface LibraryMoveInfo {
  oldKey?: string;
  pasteFileKey?: string;
}

export interface LibraryMoveHistoryItem {
  sourceNodeId?: GUID;
  sourceComponentKey?: string;
}

export interface DeveloperRelatedLink {
  nodeId?: string;
  fileKey?: string;
  linkName?: string;
  linkUrl?: string;
}

export interface WidgetPointer {
  nodeId?: GUID;
}

export interface EditInfo {
  timestampIso8601?: string;
  userId?: string;
  lastEditedAt?: number;
  createdAt?: number;
}

export interface SectionStatusInfo {
  status?: SectionStatus;
}

export interface NodeChange {
  guid?: GUID;
  guidTag?: number;
  phase?: NodePhase;
  phaseTag?: number;
  parentIndex?: ParentIndex;
  parentIndexTag?: number;
  type?: NodeType;
  typeTag?: number;
  name?: string;
  nameTag?: number;
  isPublishable?: boolean;
  description?: string;
  libraryMoveInfo?: LibraryMoveInfo;
  libraryMoveHistory?: LibraryMoveHistoryItem[];
  key?: string;
  fileAssetIds?: AssetIdMap;
  styleID?: number;
  styleIDTag?: number;
  isSoftDeletedStyle?: boolean;
  isNonUpdateable?: boolean;
  isFillStyle?: boolean;
  isStrokeStyle?: boolean;
  isOverrideOverTextStyle?: boolean;
  styleType?: StyleType;
  styleDescription?: string;
  version?: string;
  sharedStyleMasterData?: SharedStyleMasterData;
  sharedStyleReference?: SharedStyleReference;
  sortPosition?: string;
  ojansSuperSecretNodeField?: SharedStyleMasterData;
  sevMoonlitLilyData?: SharedStyleMasterData;
  inheritFillStyleID?: GUID;
  inheritStrokeStyleID?: GUID;
  inheritTextStyleID?: GUID;
  inheritExportStyleID?: GUID;
  inheritEffectStyleID?: GUID;
  inheritGridStyleID?: GUID;
  inheritFillStyleIDForStroke?: GUID;
  styleIdForFill?: StyleId;
  styleIdForStrokeFill?: StyleId;
  styleIdForText?: StyleId;
  styleIdForEffect?: StyleId;
  styleIdForGrid?: StyleId;
  backgroundPaints?: Paint[];
  inheritFillStyleIDForBackground?: GUID;
  isStateGroup?: boolean;
  stateGroupPropertyValueOrders?: StateGroupPropertyValueOrder[];
  sharedSymbolReference?: SharedSymbolReference;
  isSymbolPublishable?: boolean;
  sharedSymbolMappings?: GUIDPathMapping[];
  sharedSymbolVersion?: string;
  sharedComponentMasterData?: SharedComponentMasterData;
  symbolDescription?: string;
  unflatteningMappings?: GUIDPathMapping[];
  forceUnflatteningMappings?: GUIDPathMapping[];
  publishFile?: string;
  publishID?: GUID;
  componentKey?: string;
  isC2?: boolean;
  publishedVersion?: string;
  originComponentKey?: string;
  componentPropDefs?: ComponentPropDef[];
  componentPropRefs?: ComponentPropRef[];
  symbolData?: SymbolData;
  symbolDataTag?: number;
  derivedSymbolData?: NodeChange[];
  overriddenSymbolID?: GUID;
  componentPropAssignments?: ComponentPropAssignment[];
  propsAreBubbled?: boolean;
  overrideStash?: InstanceOverrideStash[];
  overrideStashV2?: InstanceOverrideStashV2[];
  guidPath?: GUIDPath;
  guidPathTag?: number;
  overrideLevel?: number;
  moduleType?: ModuleType;
  fontSize?: number;
  fontSizeTag?: number;
  paragraphIndent?: number;
  paragraphIndentTag?: number;
  paragraphSpacing?: number;
  paragraphSpacingTag?: number;
  textAlignHorizontal?: TextAlignHorizontal;
  textAlignHorizontalTag?: number;
  textAlignVertical?: TextAlignVertical;
  textAlignVerticalTag?: number;
  textCase?: TextCase;
  textCaseTag?: number;
  textDecoration?: TextDecoration;
  textDecorationTag?: number;
  lineHeight?: Number;
  lineHeightTag?: number;
  fontName?: FontName;
  fontNameTag?: number;
  textData?: TextData;
  textDataTag?: number;
  derivedTextData?: DerivedTextData;
  fontVariantCommonLigatures?: boolean;
  fontVariantContextualLigatures?: boolean;
  fontVariantDiscretionaryLigatures?: boolean;
  fontVariantHistoricalLigatures?: boolean;
  fontVariantOrdinal?: boolean;
  fontVariantSlashedZero?: boolean;
  fontVariantNumericFigure?: FontVariantNumericFigure;
  fontVariantNumericSpacing?: FontVariantNumericSpacing;
  fontVariantNumericFraction?: FontVariantNumericFraction;
  fontVariantCaps?: FontVariantCaps;
  fontVariantPosition?: FontVariantPosition;
  letterSpacing?: Number;
  fontVersion?: string;
  leadingTrim?: LeadingTrim;
  hangingPunctuation?: boolean;
  hangingList?: boolean;
  maxLines?: number;
  sectionStatus?: SectionStatus;
  sectionStatusInfo?: SectionStatusInfo;
  textUserLayoutVersion?: number;
  toggledOnOTFeatures?: OpenTypeFeature[];
  toggledOffOTFeatures?: OpenTypeFeature[];
  hyperlink?: Hyperlink;
  mention?: Mention;
  fontVariations?: FontVariation[];
  textBidiVersion?: number;
  textTruncation?: TextTruncation;
  hasHadRTLText?: boolean;
  visible?: boolean;
  visibleTag?: number;
  locked?: boolean;
  lockedTag?: number;
  opacity?: number;
  opacityTag?: number;
  blendMode?: BlendMode;
  blendModeTag?: number;
  size?: Vector;
  sizeTag?: number;
  transform?: Matrix;
  transformTag?: number;
  dashPattern?: number[];
  dashPatternTag?: number;
  mask?: boolean;
  maskTag?: number;
  maskIsOutline?: boolean;
  maskIsOutlineTag?: number;
  maskType?: MaskType;
  backgroundOpacity?: number;
  backgroundOpacityTag?: number;
  cornerRadius?: number;
  cornerRadiusTag?: number;
  strokeWeight?: number;
  strokeWeightTag?: number;
  strokeAlign?: StrokeAlign;
  strokeAlignTag?: number;
  strokeCap?: StrokeCap;
  strokeCapTag?: number;
  strokeJoin?: StrokeJoin;
  strokeJoinTag?: number;
  fillPaints?: Paint[];
  fillPaintsTag?: number;
  strokePaints?: Paint[];
  strokePaintsTag?: number;
  effects?: Effect[];
  effectsTag?: number;
  backgroundColor?: Color;
  backgroundColorTag?: number;
  fillGeometry?: Path[];
  fillGeometryTag?: number;
  strokeGeometry?: Path[];
  strokeGeometryTag?: number;
  rectangleTopLeftCornerRadius?: number;
  rectangleTopRightCornerRadius?: number;
  rectangleBottomLeftCornerRadius?: number;
  rectangleBottomRightCornerRadius?: number;
  rectangleCornerRadiiIndependent?: boolean;
  rectangleCornerToolIndependent?: boolean;
  proportionsConstrained?: boolean;
  useAbsoluteBounds?: boolean;
  borderTopHidden?: boolean;
  borderBottomHidden?: boolean;
  borderLeftHidden?: boolean;
  borderRightHidden?: boolean;
  bordersTakeSpace?: boolean;
  borderTopWeight?: number;
  borderBottomWeight?: number;
  borderLeftWeight?: number;
  borderRightWeight?: number;
  borderStrokeWeightsIndependent?: boolean;
  horizontalConstraint?: ConstraintType;
  horizontalConstraintTag?: number;
  stackMode?: StackMode;
  stackModeTag?: number;
  stackSpacing?: number;
  stackSpacingTag?: number;
  stackPadding?: number;
  stackPaddingTag?: number;
  stackCounterAlign?: StackCounterAlign;
  stackJustify?: StackJustify;
  stackAlign?: StackAlign;
  stackHorizontalPadding?: number;
  stackVerticalPadding?: number;
  stackWidth?: StackSize;
  stackHeight?: StackSize;
  stackPrimarySizing?: StackSize;
  stackPrimaryAlignItems?: StackJustify;
  stackCounterAlignItems?: StackAlign;
  stackChildPrimaryGrow?: number;
  stackPaddingRight?: number;
  stackPaddingBottom?: number;
  stackChildAlignSelf?: StackCounterAlign;
  stackPositioning?: StackPositioning;
  stackReverseZIndex?: boolean;
  stackWrap?: StackWrap;
  stackCounterSpacing?: number;
  minSize?: OptionalVector;
  maxSize?: OptionalVector;
  stackCounterAlignContent?: StackCounterAlignContent;
  isSnakeGameBoard?: boolean;
  transitionNodeID?: GUID;
  prototypeStartNodeID?: GUID;
  prototypeBackgroundColor?: Color;
  transitionInfo?: TransitionInfo;
  transitionType?: TransitionType;
  transitionDuration?: number;
  easingType?: EasingType;
  transitionPreserveScroll?: boolean;
  connectionType?: ConnectionType;
  connectionURL?: string;
  prototypeDevice?: PrototypeDevice;
  interactionType?: InteractionType;
  transitionTimeout?: number;
  interactionMaintained?: boolean;
  interactionDuration?: number;
  destinationIsOverlay?: boolean;
  transitionShouldSmartAnimate?: boolean;
  prototypeInteractions?: PrototypeInteraction[];
  prototypeStartingPoint?: PrototypeStartingPoint;
  pluginData?: PluginData[];
  pluginRelaunchData?: PluginRelaunchData[];
  connectorStart?: ConnectorEndpoint;
  connectorEnd?: ConnectorEndpoint;
  connectorLineStyle?: ConnectorLineStyle;
  connectorStartCap?: StrokeCap;
  connectorEndCap?: StrokeCap;
  connectorControlPoints?: ConnectorControlPoint[];
  connectorTextMidpoint?: ConnectorTextMidpoint;
  connectorType?: ConnectorType;
  annotations?: Annotation[];
  measurements?: AnnotationMeasurement[];
  shapeWithTextType?: ShapeWithTextType;
  shapeUserHeight?: number;
  derivedImmutableFrameData?: DerivedImmutableFrameData;
  derivedImmutableFrameDataVersion?: MultiplayerFieldVersion;
  nodeGenerationData?: NodeGenerationData;
  codeBlockLanguage?: CodeBlockLanguage;
  linkPreviewData?: LinkPreviewData;
  shapeTruncates?: boolean;
  sectionContentsHidden?: boolean;
  videoPlayback?: VideoPlayback;
  stampData?: StampData;
  sectionPresetInfo?: SectionPresetInfo;
  widgetSyncedState?: MultiplayerMap;
  widgetSyncCursor?: number;
  widgetDerivedSubtreeCursor?: WidgetDerivedSubtreeCursor;
  widgetCachedAncestor?: WidgetPointer;
  widgetInputBehavior?: WidgetInputBehavior;
  widgetTooltip?: string;
  widgetHoverStyle?: WidgetHoverStyle;
  isWidgetStickable?: boolean;
  shouldHideCursorsOnWidgetHover?: boolean;
  widgetMetadata?: WidgetMetadata;
  widgetEvents?: WidgetEvent[];
  widgetPropertyMenuItems?: WidgetPropertyMenuItem[];
  tableRowPositions?: TableRowColumnPositionMap;
  tableColumnPositions?: TableRowColumnPositionMap;
  tableRowHeights?: TableRowColumnSizeMap;
  tableColumnWidths?: TableRowColumnSizeMap;
  interactiveSlideConfigData?: MultiplayerMap;
  interactiveSlideParticipantData?: MultiplayerMap;
  themeID?: ThemeID;
  slideThemeData?: SlideThemeData;
  diagramParentId?: GUID;
  layoutRoot?: GUID;
  layoutPosition?: string;
  diagramLayoutRuleType?: DiagramLayoutRuleType;
  diagramParentIndex?: DiagramParentIndex;
  diagramLayoutPaused?: DiagramLayoutPaused;
  isPageDivider?: boolean;
  internalEnumForTest?: InternalEnumForTest;
  internalDataForTest?: InternalDataForTest;
  count?: number;
  countTag?: number;
  autoRename?: boolean;
  autoRenameTag?: number;
  backgroundEnabled?: boolean;
  backgroundEnabledTag?: number;
  exportContentsOnly?: boolean;
  exportContentsOnlyTag?: number;
  starInnerScale?: number;
  starInnerScaleTag?: number;
  miterLimit?: number;
  miterLimitTag?: number;
  textTracking?: number;
  textTrackingTag?: number;
  booleanOperation?: BooleanOperation;
  booleanOperationTag?: number;
  verticalConstraint?: ConstraintType;
  verticalConstraintTag?: number;
  handleMirroring?: VectorMirror;
  handleMirroringTag?: number;
  exportSettings?: ExportSettings[];
  exportSettingsTag?: number;
  textAutoResize?: TextAutoResize;
  textAutoResizeTag?: number;
  layoutGrids?: LayoutGrid[];
  layoutGridsTag?: number;
  vectorData?: VectorData;
  vectorDataTag?: number;
  frameMaskDisabled?: boolean;
  frameMaskDisabledTag?: number;
  resizeToFit?: boolean;
  resizeToFitTag?: number;
  exportBackgroundDisabled?: boolean;
  guides?: Guide[];
  internalOnly?: boolean;
  scrollDirection?: ScrollDirection;
  cornerSmoothing?: number;
  scrollOffset?: Vector;
  exportTextAsSVGText?: boolean;
  scrollContractedState?: ScrollContractedState;
  contractedSize?: Vector;
  fixedChildrenDivider?: string;
  scrollBehavior?: ScrollBehavior;
  arcData?: ArcData;
  derivedSymbolDataLayoutVersion?: number;
  navigationType?: NavigationType;
  overlayPositionType?: OverlayPositionType;
  overlayRelativePosition?: Vector;
  overlayBackgroundInteraction?: OverlayBackgroundInteraction;
  overlayBackgroundAppearance?: OverlayBackgroundAppearance;
  overrideKey?: GUID;
  containerSupportsFillStrokeAndCorners?: boolean;
  stackCounterSizing?: StackSize;
  containersSupportFillStrokeAndCorners?: boolean;
  keyTrigger?: KeyTrigger;
  voiceEventPhrase?: string;
  ancestorPathBeforeDeletion?: GUID[];
  symbolLinks?: SymbolLink[];
  textListData?: TextListData;
  detachOpticalSizeFromFontSize?: boolean;
  listSpacing?: number;
  embedData?: EmbedData;
  richMediaData?: RichMediaData;
  renderedSyncedState?: MultiplayerMap;
  simplifyInstancePanels?: boolean;
  accessibleHTMLTag?: HTMLTag;
  ariaRole?: ARIARole;
  accessibleLabel?: string;
  variableData?: VariableData;
  variableConsumptionMap?: VariableDataMap;
  variableModeBySetMap?: VariableModeBySetMap;
  variableSetModes?: VariableSetMode[];
  variableSetID?: VariableSetID;
  variableResolvedType?: VariableResolvedDataType;
  variableDataValues?: VariableDataValues;
  variableTokenName?: string;
  variableScopes?: VariableScope[];
  codeSyntax?: CodeSyntaxMap;
  backingVariableSetId?: VariableSetID;
  backingVariableId?: VariableIdOrVariableOverrideId;
  isCollectionExtendable?: boolean;
  rootVariableKey?: string;
  handoffStatusMap?: HandoffStatusMap;
  agendaPositionMap?: AgendaPositionMap;
  agendaMetadataMap?: AgendaMetadataMap;
  migrationStatus?: MigrationStatus;
  isSoftDeleted?: boolean;
  editInfo?: EditInfo;
  colorProfile?: ColorProfile;
  detachedSymbolId?: SymbolId;
  childReadingDirection?: ChildReadingDirection;
  readingIndex?: string;
  documentColorProfile?: DocumentColorProfile;
  developerRelatedLinks?: DeveloperRelatedLink[];
  slideActiveThemeLibKey?: string;
  ariaAttributes?: ARIAAttributesMap;
  editScopeInfo?: EditScopeInfo;
  semanticWeight?: SemanticWeight;
  semanticItalic?: SemanticItalic;
  isResponsiveSet?: boolean;
}

export interface VideoPlayback {
  autoplay?: boolean;
  mediaLoop?: boolean;
  muted?: boolean;
}

export interface WidgetHoverStyle {
  fillPaints?: Paint[];
  strokePaints?: Paint[];
  opacity?: number;
  areFillPaintsSet?: boolean;
  areStrokePaintsSet?: boolean;
  isOpacitySet?: boolean;
}

export interface WidgetDerivedSubtreeCursor {
  sessionID?: number;
  counter?: number;
}

export interface MultiplayerMap {
  entries?: MultiplayerMapEntry[];
}

export interface MultiplayerMapEntry {
  key?: string;
  value?: string;
}

export interface VariableDataMap {
  entries?: VariableDataMapEntry[];
}

export interface VariableDataMapEntry {
  nodeField?: number;
  variableData?: VariableData;
  variableField?: VariableField;
}

export interface VariableModeBySetMap {
  entries?: VariableModeBySetMapEntry[];
}

export interface VariableModeBySetMapEntry {
  variableSetID?: VariableSetID;
  variableModeID?: GUID;
}

export interface CodeSyntaxMap {
  entries?: CodeSyntaxMapEntry[];
}

export interface CodeSyntaxMapEntry {
  platform?: CodeSyntaxPlatform;
  value?: string;
}

export interface TableRowColumnPositionMap {
  entries?: TableRowColumnPositionMapEntry[];
}

export interface TableRowColumnPositionMapEntry {
  id?: GUID;
  position?: string;
}

export interface TableRowColumnSizeMap {
  entries?: TableRowColumnSizeMapEntry[];
}

export interface TableRowColumnSizeMapEntry {
  id?: GUID;
  size?: number;
}

export interface AgendaPositionMap {
  entries?: AgendaPositionMapEntry[];
}

export interface AgendaPositionMapEntry {
  id?: GUID;
  position?: string;
}

export interface AgendaMetadataMap {
  entries?: AgendaMetadataMapEntry[];
}

export interface AgendaMetadataMapEntry {
  id?: GUID;
  data?: AgendaMetadata;
}

export interface AgendaMetadata {
  name?: string;
  type?: AgendaItemType;
  targetNodeID?: GUID;
  timerInfo?: AgendaTimerInfo;
  voteInfo?: AgendaVoteInfo;
  musicInfo?: AgendaMusicInfo;
}

export interface AgendaTimerInfo {
  timerLength?: number;
}

export interface AgendaVoteInfo {
  voteCount?: number;
}

export interface AgendaMusicInfo {
  songID?: string;
  startTimeMs?: number;
}

export interface DiagramParentIndex {
  guid: GUID;
  position: string;
}

export interface ComponentPropRef {
  nodeField?: number;
  defID?: GUID;
  zombieFallbackName?: string;
  componentPropNodeField?: ComponentPropNodeField;
  isDeleted?: boolean;
}

export interface ComponentPropAssignment {
  defID?: GUID;
  value?: ComponentPropValue;
}

export interface ComponentPropDef {
  id?: GUID;
  name?: string;
  initialValue?: ComponentPropValue;
  sortPosition?: string;
  parentPropDefId?: GUID;
  type?: ComponentPropType;
  isDeleted?: boolean;
  preferredValues?: ComponentPropPreferredValues;
}

export interface ComponentPropValue {
  boolValue?: boolean;
  textValue?: TextData;
  guidValue?: GUID;
}

export interface ComponentPropPreferredValues {
  stringValues?: string[];
  instanceSwapValues?: InstanceSwapPreferredValue[];
}

export interface InstanceSwapPreferredValue {
  type?: InstanceSwapPreferredValueType;
  key?: string;
}

export interface WidgetMetadata {
  pluginID?: string;
  pluginVersionID?: string;
  widgetName?: string;
}

export interface WidgetPropertyMenuSelectorOption {
  option?: string;
  tooltip?: string;
}

export interface WidgetPropertyMenuItem {
  propertyName?: string;
  tooltip?: string;
  itemType?: WidgetPropertyMenuItemType;
  icon?: string;
  options?: WidgetPropertyMenuSelectorOption[];
  selectedOption?: string;
  isToggled?: boolean;
  href?: string;
  allowCustomColor?: boolean;
}

export interface InternalDataForTest {
  testFieldA?: number;
}

export interface StateGroupPropertyValueOrder {
  property?: string;
  values?: string[];
}

export interface TextListData {
  listID?: number;
  bulletType?: BulletType;
  indentationLevel?: number;
  lineNumber?: number;
}

export interface TextLineData {
  lineType?: LineType;
  indentationLevel?: number;
  sourceDirectionality?: SourceDirectionality;
  directionality?: Directionality;
  directionalityIntent?: DirectionalityIntent;
  downgradeStyleId?: number;
  consistencyStyleId?: number;
  listStartOffset?: number;
  isFirstLineOfList?: boolean;
}

export interface DerivedTextLineData {
  directionality?: Directionality;
}

export interface PrototypeInteraction {
  id?: GUID;
  event?: PrototypeEvent;
  actions?: PrototypeAction[];
  isDeleted?: boolean;
  stateManagementVersion?: number;
}

export interface PrototypeEvent {
  interactionType?: InteractionType;
  interactionMaintained?: boolean;
  interactionDuration?: number;
  keyTrigger?: KeyTrigger;
  voiceEventPhrase?: string;
  transitionTimeout?: number;
  mediaHitTime?: number;
}

export interface PrototypeVariableTarget {
  id?: VariableID;
}

export interface ConditionalActions {
  actions?: PrototypeAction[];
  condition?: VariableData;
}

export interface PrototypeAction {
  transitionNodeID?: GUID;
  transitionType?: TransitionType;
  transitionDuration?: number;
  easingType?: EasingType;
  transitionTimeout?: number;
  transitionShouldSmartAnimate?: boolean;
  connectionType?: ConnectionType;
  connectionURL?: string;
  overlayRelativePosition?: Vector;
  navigationType?: NavigationType;
  transitionPreserveScroll?: boolean;
  easingFunction?: number[];
  extraScrollOffset?: Vector;
  targetVariableID?: GUID;
  targetVariableValue?: VariableAnyValue;
  mediaAction?: MediaAction;
  transitionResetVideoPosition?: boolean;
  openUrlInNewTab?: boolean;
  targetVariable?: PrototypeVariableTarget;
  targetVariableData?: VariableData;
  mediaSkipToTime?: number;
  mediaSkipByAmount?: number;
  conditions?: VariableData[];
  conditionalActions?: ConditionalActions[];
  transitionResetScrollPosition?: boolean;
  transitionResetInteractiveComponents?: boolean;
}

export interface PrototypeStartingPoint {
  name?: string;
  description?: string;
  position?: string;
}

export interface KeyTrigger {
  keyCodes?: number[];
  triggerDevice?: TriggerDevice;
}

export interface Hyperlink {
  url?: string;
  guid?: GUID;
}

export interface Mention {
  id?: GUID;
  mentionedUserId?: string;
  mentionedByUserId?: string;
  fileKey?: string;
  source?: MentionSource;
  mentionedUserIdInt?: bigint;
  mentionedByUserIdInt?: bigint;
}

export interface EmbedData {
  url?: string;
  srcUrl?: string;
  title?: string;
  thumbnailUrl?: string;
  width?: number;
  height?: number;
  embedType?: string;
  thumbnailImageHash?: string;
  faviconImageHash?: string;
  provider?: string;
  originalText?: string;
  description?: string;
  embedVersionId?: string;
}

export interface StampData {
  userId?: string;
  votingSessionId?: string;
  stampedByUserId?: string;
}

export interface LinkPreviewData {
  url?: string;
  title?: string;
  provider?: string;
  description?: string;
  thumbnailImageHash?: string;
  faviconImageHash?: string;
  thumbnailImageWidth?: number;
  thumbnailImageHeight?: number;
}

export interface Viewport {
  canvasSpaceBounds?: Rect;
  pixelPreview?: boolean;
  pixelDensity?: number;
  canvasGuid?: GUID;
}

export interface Mouse {
  cursor?: MouseCursor;
  canvasSpaceLocation?: Vector;
  canvasSpaceSelectionBox?: Rect;
  canvasGuid?: GUID;
  cursorHiddenReason?: number;
}

export interface Click {
  id: number;
  point: Vector;
}

export interface ScrollPosition {
  node: GUID;
  scrollOffset: Vector;
}

export interface TriggeredOverlay {
  overlayGuid: GUID;
  hotspotGuid: GUID;
  swapGuid: GUID;
}

export interface TriggeredOverlayData {
  overlayGuid?: GUID;
  hotspotGuid?: GUID;
  swapGuid?: GUID;
  prototypeInteractionGuid?: GUID;
  hotspotBlueprintId?: GUIDPath;
}

export interface TriggeredSetVariableActionData {
  nodeForFindingTopmostScreenId?: GUID;
  targetVariableId?: string;
  targetVariableData?: string;
  resolvedVariableModes?: string;
}

export interface VideoStateChangeData {
  targetNodeId?: GUID;
  isPlaying?: boolean;
  isPlayingSound?: boolean;
  currentTimes?: number[];
  actionTakenTimestamp?: number;
}

export interface PresentedState {
  baseScreenID?: GUID;
  overlays?: TriggeredOverlayData[];
}

export interface TopLevelPlaybackChange {
  oldState?: PresentedState;
  newState?: PresentedState;
  hotspotBlueprintID?: GUIDPath;
  interactionID?: GUID;
  isHotspotInNewPresentedState?: boolean;
  direction?: TransitionDirection;
  instanceStablePath?: GUIDPath;
}

export interface InstanceStateChange {
  stateID?: GUID;
  interactionID?: GUID;
  hotspotStablePath?: GUIDPath;
  instanceStablePath?: GUIDPath;
  phase?: PlaybackChangePhase;
}

export interface TextCursor {
  selectionBox?: Rect;
  canvasGuid?: GUID;
  textNodeGuid?: GUID;
}

export interface TextSelection {
  selectionBoxes?: Rect[];
  canvasGuid?: GUID;
  textNodeGuid?: GUID;
  textSelectionRange?: Vector;
  textNodeOrContainingIfGuid?: GUID;
  tableCellRowId?: GUID;
  tableCellColId?: GUID;
}

export interface PlaybackChangeKeyframe {
  phase?: PlaybackChangePhase;
  progress?: number;
  timestamp?: number;
}

export interface StateMapping {
  stablePath?: GUIDPath;
  lastTopLevelChange?: TopLevelPlaybackChange;
  lastTopLevelChangeStatus?: PlaybackChangeKeyframe;
  timestamp?: number;
}

export interface ScrollMapping {
  blueprintID?: GUIDPath;
  overlayIndex?: number;
  scrollOffset?: Vector;
}

export interface PlaybackUpdate {
  lastTopLevelChange?: TopLevelPlaybackChange;
  lastTopLevelChangeStatus?: PlaybackChangeKeyframe;
  scrollMappings?: ScrollMapping[];
  timestamp?: number;
  pointerLocation?: Vector;
  isTopLevelFrameChange?: boolean;
  stateMappings?: StateMapping[];
}

export interface ChatMessage {
  text?: string;
  previousText?: string;
}

export interface VoiceMetadata {
  connectedCallId?: string;
}

export interface UserChange {
  sessionID?: number;
  connected?: boolean;
  name?: string;
  color?: Color;
  imageURL?: string;
  viewport?: Viewport;
  mouse?: Mouse;
  selection?: GUID[];
  observing?: number[];
  deviceName?: string;
  recentClicks?: Click[];
  scrollPositions?: ScrollPosition[];
  triggeredOverlays?: TriggeredOverlay[];
  userID?: string;
  lastTriggeredHotspot?: GUID;
  lastTriggeredPrototypeInteractionID?: GUID;
  triggeredOverlaysData?: TriggeredOverlayData[];
  playbackUpdates?: PlaybackUpdate[];
  chatMessage?: ChatMessage;
  voiceMetadata?: VoiceMetadata;
  canWrite?: boolean;
  highFiveStatus?: boolean;
  instanceStateChanges?: InstanceStateChange[];
  textCursor?: TextCursor;
  textSelection?: TextSelection;
  connectedAtTimeS?: number;
  focusOnTextCursor?: boolean;
  heartbeat?: Heartbeat;
  triggeredSetVariableActionData?: TriggeredSetVariableActionData[];
  videoStateChangeData?: VideoStateChangeData[];
}

export interface InteractiveSlideElementChange {
  userID?: string;
  anonymousUserID?: string;
  nodeID?: GUID;
  responseData?: string;
}

export interface SceneGraphQuery {
  startingNode?: GUID;
  depth?: number;
  behavior?: SceneGraphQueryBehavior;
}

export interface NodeChangesMetadata {
  blobsFieldOffset?: number;
}

export interface CursorReaction {
  imageUrl?: string;
}

export interface TimerInfo {
  isPaused?: boolean;
  timeRemainingMs?: number;
  totalTimeMs?: number;
  timerID?: number;
  setBy?: string;
  songID?: number;
  lastReceivedSongTimestampMs?: number;
  songUUID?: string;
}

export interface MusicInfo {
  isPaused?: boolean;
  messageID?: number;
  songID?: string;
  lastReceivedSongTimestampMs?: number;
  isStopped?: boolean;
}

export interface PresenterNomination {
  sessionID?: number;
  isCancelled?: boolean;
}

export interface PresenterInfo {
  sessionID?: number;
  nomination?: PresenterNomination;
}

export interface ClientBroadcast {
  sessionID?: number;
  cursorReaction?: CursorReaction;
  timer?: TimerInfo;
  presenter?: PresenterInfo;
  prototypePresenter?: PresenterInfo;
  music?: MusicInfo;
}

export interface Message {
  type?: MessageType;
  sessionID?: number;
  ackID?: number;
  nodeChanges?: NodeChange[];
  userChanges?: UserChange[];
  interactiveSlideElementChange?: InteractiveSlideElementChange;
  blobs?: Blob[];
  blobBaseIndex?: number;
  signalName?: string;
  access?: Access;
  styleSetName?: string;
  styleSetType?: StyleSetType;
  styleSetContentType?: StyleSetContentType;
  pasteID?: number;
  pasteOffset?: Vector;
  pasteFileKey?: string;
  signalPayload?: string;
  sceneGraphQueries?: SceneGraphQuery[];
  nodeChangesMetadata?: NodeChangesMetadata;
  fileVersion?: number;
  pasteIsPartiallyOutsideEnclosingFrame?: boolean;
  pastePageId?: GUID;
  isCut?: boolean;
  localUndoStack?: Message[];
  localRedoStack?: Message[];
  broadcasts?: ClientBroadcast[];
  reconnectSequenceNumber?: number;
  pasteBranchSourceFileKey?: string;
  pasteEditorType?: EditorType;
  postSyncActions?: string;
  publishedAssetGuids?: GUID[];
  dirtyFromInitialLoad?: boolean;
}

export interface DiffChunk {
  nodeChanges?: number[];
  phase?: NodePhase;
  displayNode?: NodeChange;
  canvasId?: GUID;
  canvasName?: string;
  canvasIsInternal?: boolean;
  chunksAffectingThisChunk?: number[];
  basisParentHierarchy?: NodeChange[];
  parentHierarchy?: NodeChange[];
  basisParentHierarchyGuids?: GUID[];
  parentHierarchyGuids?: GUID[];
}

export interface DiffPayload {
  nodeChanges?: NodeChange[];
  blobs?: Blob[];
  diffChunks?: DiffChunk[];
  diffBasis?: NodeChange[];
  basisParentNodeChanges?: NodeChange[];
  parentNodeChanges?: NodeChange[];
}

export interface RichMediaData {
  mediaHash?: string;
  richMediaType?: RichMediaType;
}

export interface VariableAnyValue {
  boolValue?: boolean;
  textValue?: string;
  floatValue?: number;
  alias?: VariableID;
  colorValue?: Color;
  expressionValue?: Expression;
  mapValue?: VariableMap;
  symbolIdValue?: SymbolId;
  fontStyleValue?: VariableFontStyle;
}

export interface Expression {
  expressionFunction?: ExpressionFunction;
  expressionArguments?: VariableData[];
}

export interface VariableMapValue {
  key?: string;
  value?: VariableData;
}

export interface VariableMap {
  values?: VariableMapValue[];
}

export interface VariableFontStyle {
  asString?: VariableData;
  asFloat?: VariableData;
}

export interface VariableData {
  value?: VariableAnyValue;
  dataType?: VariableDataType;
  resolvedDataType?: VariableResolvedDataType;
}

export interface VariableSetMode {
  id?: GUID;
  name?: string;
  sortPosition?: string;
}

export interface VariableDataValues {
  entries?: VariableDataValuesEntry[];
}

export interface VariableDataValuesEntry {
  modeID?: GUID;
  variableData?: VariableData;
}

export interface OptionalVector {
  value?: Vector;
}

export interface MigrationStatus {
  dsdCleanup?: boolean;
}

export interface NodeFieldMap {
  entries?: NodeFieldMapEntry[];
}

export interface NodeFieldMapEntry {
  guid?: GUID;
  field?: number;
  lastModifiedSequenceNumber?: number;
}

export interface ARIAAttributeAnyValue {
  boolValue?: boolean;
  stringValue?: string;
  floatValue?: number;
  intValue?: number;
  stringArrayValue?: string[];
}

export interface ARIAAttributeData {
  type?: ARIAAttributeDataType;
  value?: ARIAAttributeAnyValue;
}

export interface ARIAAttributesMap {
  entries?: ARIAAttributesMapEntry[];
}

export interface ARIAAttributesMapEntry {
  attribute?: string;
  value?: ARIAAttributeData;
}

export interface HandoffStatusMapEntry {
  guid?: GUID;
  handoffStatus?: SectionStatusInfo;
}

export interface HandoffStatusMap {
  entries?: HandoffStatusMapEntry[];
}

export interface EditScopeInfo {
  editScopeStacks?: EditScopeStack[];
}

export interface EditScopeStack {
  stack?: EditScope[];
}

export interface EditScope {
  type?: EditScopeType;
  label?: string;
}

export interface SectionPresetInfo {
  shelfId?: bigint;
  templateId?: bigint;
  templateName?: string;
}

export interface VariableIdOrVariableOverrideId {
  variableId?: VariableID;
  variableOverrideId?: VariableOverrideId;
}

export interface Schema {
  MessageType: any;
  Axis: any;
  Access: any;
  NodePhase: any;
  WindingRule: any;
  NodeType: any;
  ShapeWithTextType: any;
  BlendMode: any;
  PaintType: any;
  ImageScaleMode: any;
  EffectType: any;
  TextCase: any;
  TextDecoration: any;
  LeadingTrim: any;
  NumberUnits: any;
  ConstraintType: any;
  StrokeAlign: any;
  StrokeCap: any;
  StrokeJoin: any;
  BooleanOperation: any;
  TextAlignHorizontal: any;
  TextAlignVertical: any;
  MouseCursor: any;
  VectorMirror: any;
  DashMode: any;
  ImageType: any;
  ExportConstraintType: any;
  LayoutGridType: any;
  LayoutGridPattern: any;
  TextAutoResize: any;
  TextTruncation: any;
  StyleSetType: any;
  StyleSetContentType: any;
  StackMode: any;
  StackAlign: any;
  StackCounterAlign: any;
  StackJustify: any;
  StackSize: any;
  StackPositioning: any;
  StackWrap: any;
  StackCounterAlignContent: any;
  ConnectionType: any;
  InteractionType: any;
  TransitionType: any;
  EasingType: any;
  ScrollDirection: any;
  ScrollContractedState: any;
  encodeGUID(message: GUID): Uint8Array;
  decodeGUID(buffer: Uint8Array): GUID;
  encodeColor(message: Color): Uint8Array;
  decodeColor(buffer: Uint8Array): Color;
  encodeVector(message: Vector): Uint8Array;
  decodeVector(buffer: Uint8Array): Vector;
  encodeRect(message: Rect): Uint8Array;
  decodeRect(buffer: Uint8Array): Rect;
  encodeColorStop(message: ColorStop): Uint8Array;
  decodeColorStop(buffer: Uint8Array): ColorStop;
  encodeMatrix(message: Matrix): Uint8Array;
  decodeMatrix(buffer: Uint8Array): Matrix;
  encodeParentIndex(message: ParentIndex): Uint8Array;
  decodeParentIndex(buffer: Uint8Array): ParentIndex;
  encodeNumber(message: Number): Uint8Array;
  decodeNumber(buffer: Uint8Array): Number;
  encodeFontName(message: FontName): Uint8Array;
  decodeFontName(buffer: Uint8Array): FontName;
  FontVariantNumericFigure: any;
  FontVariantNumericSpacing: any;
  FontVariantNumericFraction: any;
  FontVariantCaps: any;
  FontVariantPosition: any;
  FontStyle: any;
  SemanticWeight: any;
  SemanticItalic: any;
  OpenTypeFeature: any;
  encodeExportConstraint(message: ExportConstraint): Uint8Array;
  decodeExportConstraint(buffer: Uint8Array): ExportConstraint;
  encodeGUIDMapping(message: GUIDMapping): Uint8Array;
  decodeGUIDMapping(buffer: Uint8Array): GUIDMapping;
  encodeBlob(message: Blob): Uint8Array;
  decodeBlob(buffer: Uint8Array): Blob;
  encodeImage(message: Image): Uint8Array;
  decodeImage(buffer: Uint8Array): Image;
  encodeVideo(message: Video): Uint8Array;
  decodeVideo(buffer: Uint8Array): Video;
  encodeFilterColorAdjust(message: FilterColorAdjust): Uint8Array;
  decodeFilterColorAdjust(buffer: Uint8Array): FilterColorAdjust;
  encodePaintFilterMessage(message: PaintFilterMessage): Uint8Array;
  decodePaintFilterMessage(buffer: Uint8Array): PaintFilterMessage;
  encodePaint(message: Paint): Uint8Array;
  decodePaint(buffer: Uint8Array): Paint;
  encodeFontMetaData(message: FontMetaData): Uint8Array;
  decodeFontMetaData(buffer: Uint8Array): FontMetaData;
  encodeFontVariation(message: FontVariation): Uint8Array;
  decodeFontVariation(buffer: Uint8Array): FontVariation;
  encodeTextData(message: TextData): Uint8Array;
  decodeTextData(buffer: Uint8Array): TextData;
  encodeDerivedTextData(message: DerivedTextData): Uint8Array;
  decodeDerivedTextData(buffer: Uint8Array): DerivedTextData;
  encodeHyperlinkBox(message: HyperlinkBox): Uint8Array;
  decodeHyperlinkBox(buffer: Uint8Array): HyperlinkBox;
  encodeMentionBox(message: MentionBox): Uint8Array;
  decodeMentionBox(buffer: Uint8Array): MentionBox;
  encodeBaseline(message: Baseline): Uint8Array;
  decodeBaseline(buffer: Uint8Array): Baseline;
  encodeGlyph(message: Glyph): Uint8Array;
  decodeGlyph(buffer: Uint8Array): Glyph;
  encodeDecoration(message: Decoration): Uint8Array;
  decodeDecoration(buffer: Uint8Array): Decoration;
  encodeBlockquote(message: Blockquote): Uint8Array;
  decodeBlockquote(buffer: Uint8Array): Blockquote;
  encodeVectorData(message: VectorData): Uint8Array;
  decodeVectorData(buffer: Uint8Array): VectorData;
  encodeGUIDPath(message: GUIDPath): Uint8Array;
  decodeGUIDPath(buffer: Uint8Array): GUIDPath;
  encodeSymbolData(message: SymbolData): Uint8Array;
  decodeSymbolData(buffer: Uint8Array): SymbolData;
  encodeGUIDPathMapping(message: GUIDPathMapping): Uint8Array;
  decodeGUIDPathMapping(buffer: Uint8Array): GUIDPathMapping;
  encodeNodeGenerationData(message: NodeGenerationData): Uint8Array;
  decodeNodeGenerationData(buffer: Uint8Array): NodeGenerationData;
  encodeDerivedImmutableFrameData(message: DerivedImmutableFrameData): Uint8Array;
  decodeDerivedImmutableFrameData(buffer: Uint8Array): DerivedImmutableFrameData;
  encodeAssetIdMap(message: AssetIdMap): Uint8Array;
  decodeAssetIdMap(buffer: Uint8Array): AssetIdMap;
  encodeAssetIdEntry(message: AssetIdEntry): Uint8Array;
  decodeAssetIdEntry(buffer: Uint8Array): AssetIdEntry;
  encodeAssetRef(message: AssetRef): Uint8Array;
  decodeAssetRef(buffer: Uint8Array): AssetRef;
  encodeAssetId(message: AssetId): Uint8Array;
  decodeAssetId(buffer: Uint8Array): AssetId;
  encodeStateGroupId(message: StateGroupId): Uint8Array;
  decodeStateGroupId(buffer: Uint8Array): StateGroupId;
  encodeStyleId(message: StyleId): Uint8Array;
  decodeStyleId(buffer: Uint8Array): StyleId;
  encodeSymbolId(message: SymbolId): Uint8Array;
  decodeSymbolId(buffer: Uint8Array): SymbolId;
  encodeVariableID(message: VariableID): Uint8Array;
  decodeVariableID(buffer: Uint8Array): VariableID;
  encodeVariableOverrideId(message: VariableOverrideId): Uint8Array;
  decodeVariableOverrideId(buffer: Uint8Array): VariableOverrideId;
  encodeVariableSetID(message: VariableSetID): Uint8Array;
  decodeVariableSetID(buffer: Uint8Array): VariableSetID;
  encodeThemeID(message: ThemeID): Uint8Array;
  decodeThemeID(buffer: Uint8Array): ThemeID;
  encodeSlideThemeData(message: SlideThemeData): Uint8Array;
  decodeSlideThemeData(buffer: Uint8Array): SlideThemeData;
  encodeSharedSymbolReference(message: SharedSymbolReference): Uint8Array;
  decodeSharedSymbolReference(buffer: Uint8Array): SharedSymbolReference;
  encodeSharedComponentMasterData(message: SharedComponentMasterData): Uint8Array;
  decodeSharedComponentMasterData(buffer: Uint8Array): SharedComponentMasterData;
  encodeInstanceOverrideStash(message: InstanceOverrideStash): Uint8Array;
  decodeInstanceOverrideStash(buffer: Uint8Array): InstanceOverrideStash;
  encodeInstanceOverrideStashV2(message: InstanceOverrideStashV2): Uint8Array;
  decodeInstanceOverrideStashV2(buffer: Uint8Array): InstanceOverrideStashV2;
  encodeEffect(message: Effect): Uint8Array;
  decodeEffect(buffer: Uint8Array): Effect;
  encodeTransitionInfo(message: TransitionInfo): Uint8Array;
  decodeTransitionInfo(buffer: Uint8Array): TransitionInfo;
  PrototypeDeviceType: any;
  DeviceRotation: any;
  encodePrototypeDevice(message: PrototypeDevice): Uint8Array;
  decodePrototypeDevice(buffer: Uint8Array): PrototypeDevice;
  OverlayPositionType: any;
  OverlayBackgroundInteraction: any;
  OverlayBackgroundType: any;
  encodeOverlayBackgroundAppearance(message: OverlayBackgroundAppearance): Uint8Array;
  decodeOverlayBackgroundAppearance(buffer: Uint8Array): OverlayBackgroundAppearance;
  NavigationType: any;
  ExportColorProfile: any;
  encodeExportSettings(message: ExportSettings): Uint8Array;
  decodeExportSettings(buffer: Uint8Array): ExportSettings;
  ExportSVGIDMode: any;
  encodeLayoutGrid(message: LayoutGrid): Uint8Array;
  decodeLayoutGrid(buffer: Uint8Array): LayoutGrid;
  encodeGuide(message: Guide): Uint8Array;
  decodeGuide(buffer: Uint8Array): Guide;
  encodePath(message: Path): Uint8Array;
  decodePath(buffer: Uint8Array): Path;
  StyleType: any;
  encodeSharedStyleReference(message: SharedStyleReference): Uint8Array;
  decodeSharedStyleReference(buffer: Uint8Array): SharedStyleReference;
  encodeSharedStyleMasterData(message: SharedStyleMasterData): Uint8Array;
  decodeSharedStyleMasterData(buffer: Uint8Array): SharedStyleMasterData;
  ScrollBehavior: any;
  encodeArcData(message: ArcData): Uint8Array;
  decodeArcData(buffer: Uint8Array): ArcData;
  encodeSymbolLink(message: SymbolLink): Uint8Array;
  decodeSymbolLink(buffer: Uint8Array): SymbolLink;
  encodePluginData(message: PluginData): Uint8Array;
  decodePluginData(buffer: Uint8Array): PluginData;
  encodePluginRelaunchData(message: PluginRelaunchData): Uint8Array;
  decodePluginRelaunchData(buffer: Uint8Array): PluginRelaunchData;
  encodeMultiplayerFieldVersion(message: MultiplayerFieldVersion): Uint8Array;
  decodeMultiplayerFieldVersion(buffer: Uint8Array): MultiplayerFieldVersion;
  ConnectorMagnet: any;
  encodeConnectorEndpoint(message: ConnectorEndpoint): Uint8Array;
  decodeConnectorEndpoint(buffer: Uint8Array): ConnectorEndpoint;
  encodeConnectorControlPoint(message: ConnectorControlPoint): Uint8Array;
  decodeConnectorControlPoint(buffer: Uint8Array): ConnectorControlPoint;
  ConnectorTextSection: any;
  encodeConnectorTextMidpoint(message: ConnectorTextMidpoint): Uint8Array;
  decodeConnectorTextMidpoint(buffer: Uint8Array): ConnectorTextMidpoint;
  ConnectorLineStyle: any;
  ConnectorType: any;
  AnnotationPropertyType: any;
  encodeAnnotationProperty(message: AnnotationProperty): Uint8Array;
  decodeAnnotationProperty(buffer: Uint8Array): AnnotationProperty;
  encodeAnnotation(message: Annotation): Uint8Array;
  decodeAnnotation(buffer: Uint8Array): Annotation;
  AnnotationMeasurementNodeSide: any;
  encodeAnnotationMeasurement(message: AnnotationMeasurement): Uint8Array;
  decodeAnnotationMeasurement(buffer: Uint8Array): AnnotationMeasurement;
  encodeLibraryMoveInfo(message: LibraryMoveInfo): Uint8Array;
  decodeLibraryMoveInfo(buffer: Uint8Array): LibraryMoveInfo;
  encodeLibraryMoveHistoryItem(message: LibraryMoveHistoryItem): Uint8Array;
  decodeLibraryMoveHistoryItem(buffer: Uint8Array): LibraryMoveHistoryItem;
  encodeDeveloperRelatedLink(message: DeveloperRelatedLink): Uint8Array;
  decodeDeveloperRelatedLink(buffer: Uint8Array): DeveloperRelatedLink;
  encodeWidgetPointer(message: WidgetPointer): Uint8Array;
  decodeWidgetPointer(buffer: Uint8Array): WidgetPointer;
  encodeEditInfo(message: EditInfo): Uint8Array;
  decodeEditInfo(buffer: Uint8Array): EditInfo;
  EditorType: any;
  MaskType: any;
  ModuleType: any;
  SectionStatus: any;
  encodeSectionStatusInfo(message: SectionStatusInfo): Uint8Array;
  decodeSectionStatusInfo(buffer: Uint8Array): SectionStatusInfo;
  encodeNodeChange(message: NodeChange): Uint8Array;
  decodeNodeChange(buffer: Uint8Array): NodeChange;
  encodeVideoPlayback(message: VideoPlayback): Uint8Array;
  decodeVideoPlayback(buffer: Uint8Array): VideoPlayback;
  MediaAction: any;
  encodeWidgetHoverStyle(message: WidgetHoverStyle): Uint8Array;
  decodeWidgetHoverStyle(buffer: Uint8Array): WidgetHoverStyle;
  encodeWidgetDerivedSubtreeCursor(message: WidgetDerivedSubtreeCursor): Uint8Array;
  decodeWidgetDerivedSubtreeCursor(buffer: Uint8Array): WidgetDerivedSubtreeCursor;
  encodeMultiplayerMap(message: MultiplayerMap): Uint8Array;
  decodeMultiplayerMap(buffer: Uint8Array): MultiplayerMap;
  encodeMultiplayerMapEntry(message: MultiplayerMapEntry): Uint8Array;
  decodeMultiplayerMapEntry(buffer: Uint8Array): MultiplayerMapEntry;
  encodeVariableDataMap(message: VariableDataMap): Uint8Array;
  decodeVariableDataMap(buffer: Uint8Array): VariableDataMap;
  encodeVariableDataMapEntry(message: VariableDataMapEntry): Uint8Array;
  decodeVariableDataMapEntry(buffer: Uint8Array): VariableDataMapEntry;
  VariableField: any;
  encodeVariableModeBySetMap(message: VariableModeBySetMap): Uint8Array;
  decodeVariableModeBySetMap(buffer: Uint8Array): VariableModeBySetMap;
  encodeVariableModeBySetMapEntry(message: VariableModeBySetMapEntry): Uint8Array;
  decodeVariableModeBySetMapEntry(buffer: Uint8Array): VariableModeBySetMapEntry;
  encodeCodeSyntaxMap(message: CodeSyntaxMap): Uint8Array;
  decodeCodeSyntaxMap(buffer: Uint8Array): CodeSyntaxMap;
  encodeCodeSyntaxMapEntry(message: CodeSyntaxMapEntry): Uint8Array;
  decodeCodeSyntaxMapEntry(buffer: Uint8Array): CodeSyntaxMapEntry;
  encodeTableRowColumnPositionMap(message: TableRowColumnPositionMap): Uint8Array;
  decodeTableRowColumnPositionMap(buffer: Uint8Array): TableRowColumnPositionMap;
  encodeTableRowColumnPositionMapEntry(message: TableRowColumnPositionMapEntry): Uint8Array;
  decodeTableRowColumnPositionMapEntry(buffer: Uint8Array): TableRowColumnPositionMapEntry;
  encodeTableRowColumnSizeMap(message: TableRowColumnSizeMap): Uint8Array;
  decodeTableRowColumnSizeMap(buffer: Uint8Array): TableRowColumnSizeMap;
  encodeTableRowColumnSizeMapEntry(message: TableRowColumnSizeMapEntry): Uint8Array;
  decodeTableRowColumnSizeMapEntry(buffer: Uint8Array): TableRowColumnSizeMapEntry;
  encodeAgendaPositionMap(message: AgendaPositionMap): Uint8Array;
  decodeAgendaPositionMap(buffer: Uint8Array): AgendaPositionMap;
  encodeAgendaPositionMapEntry(message: AgendaPositionMapEntry): Uint8Array;
  decodeAgendaPositionMapEntry(buffer: Uint8Array): AgendaPositionMapEntry;
  AgendaItemType: any;
  encodeAgendaMetadataMap(message: AgendaMetadataMap): Uint8Array;
  decodeAgendaMetadataMap(buffer: Uint8Array): AgendaMetadataMap;
  encodeAgendaMetadataMapEntry(message: AgendaMetadataMapEntry): Uint8Array;
  decodeAgendaMetadataMapEntry(buffer: Uint8Array): AgendaMetadataMapEntry;
  encodeAgendaMetadata(message: AgendaMetadata): Uint8Array;
  decodeAgendaMetadata(buffer: Uint8Array): AgendaMetadata;
  encodeAgendaTimerInfo(message: AgendaTimerInfo): Uint8Array;
  decodeAgendaTimerInfo(buffer: Uint8Array): AgendaTimerInfo;
  encodeAgendaVoteInfo(message: AgendaVoteInfo): Uint8Array;
  decodeAgendaVoteInfo(buffer: Uint8Array): AgendaVoteInfo;
  encodeAgendaMusicInfo(message: AgendaMusicInfo): Uint8Array;
  decodeAgendaMusicInfo(buffer: Uint8Array): AgendaMusicInfo;
  DiagramLayoutRuleType: any;
  encodeDiagramParentIndex(message: DiagramParentIndex): Uint8Array;
  decodeDiagramParentIndex(buffer: Uint8Array): DiagramParentIndex;
  DiagramLayoutPaused: any;
  encodeComponentPropRef(message: ComponentPropRef): Uint8Array;
  decodeComponentPropRef(buffer: Uint8Array): ComponentPropRef;
  ComponentPropNodeField: any;
  encodeComponentPropAssignment(message: ComponentPropAssignment): Uint8Array;
  decodeComponentPropAssignment(buffer: Uint8Array): ComponentPropAssignment;
  encodeComponentPropDef(message: ComponentPropDef): Uint8Array;
  decodeComponentPropDef(buffer: Uint8Array): ComponentPropDef;
  encodeComponentPropValue(message: ComponentPropValue): Uint8Array;
  decodeComponentPropValue(buffer: Uint8Array): ComponentPropValue;
  ComponentPropType: any;
  encodeComponentPropPreferredValues(message: ComponentPropPreferredValues): Uint8Array;
  decodeComponentPropPreferredValues(buffer: Uint8Array): ComponentPropPreferredValues;
  encodeInstanceSwapPreferredValue(message: InstanceSwapPreferredValue): Uint8Array;
  decodeInstanceSwapPreferredValue(buffer: Uint8Array): InstanceSwapPreferredValue;
  InstanceSwapPreferredValueType: any;
  WidgetEvent: any;
  WidgetInputBehavior: any;
  encodeWidgetMetadata(message: WidgetMetadata): Uint8Array;
  decodeWidgetMetadata(buffer: Uint8Array): WidgetMetadata;
  WidgetPropertyMenuItemType: any;
  encodeWidgetPropertyMenuSelectorOption(message: WidgetPropertyMenuSelectorOption): Uint8Array;
  decodeWidgetPropertyMenuSelectorOption(buffer: Uint8Array): WidgetPropertyMenuSelectorOption;
  encodeWidgetPropertyMenuItem(message: WidgetPropertyMenuItem): Uint8Array;
  decodeWidgetPropertyMenuItem(buffer: Uint8Array): WidgetPropertyMenuItem;
  CodeBlockLanguage: any;
  InternalEnumForTest: any;
  encodeInternalDataForTest(message: InternalDataForTest): Uint8Array;
  decodeInternalDataForTest(buffer: Uint8Array): InternalDataForTest;
  encodeStateGroupPropertyValueOrder(message: StateGroupPropertyValueOrder): Uint8Array;
  decodeStateGroupPropertyValueOrder(buffer: Uint8Array): StateGroupPropertyValueOrder;
  encodeTextListData(message: TextListData): Uint8Array;
  decodeTextListData(buffer: Uint8Array): TextListData;
  BulletType: any;
  encodeTextLineData(message: TextLineData): Uint8Array;
  decodeTextLineData(buffer: Uint8Array): TextLineData;
  encodeDerivedTextLineData(message: DerivedTextLineData): Uint8Array;
  decodeDerivedTextLineData(buffer: Uint8Array): DerivedTextLineData;
  LineType: any;
  SourceDirectionality: any;
  Directionality: any;
  DirectionalityIntent: any;
  encodePrototypeInteraction(message: PrototypeInteraction): Uint8Array;
  decodePrototypeInteraction(buffer: Uint8Array): PrototypeInteraction;
  encodePrototypeEvent(message: PrototypeEvent): Uint8Array;
  decodePrototypeEvent(buffer: Uint8Array): PrototypeEvent;
  encodePrototypeVariableTarget(message: PrototypeVariableTarget): Uint8Array;
  decodePrototypeVariableTarget(buffer: Uint8Array): PrototypeVariableTarget;
  encodeConditionalActions(message: ConditionalActions): Uint8Array;
  decodeConditionalActions(buffer: Uint8Array): ConditionalActions;
  encodePrototypeAction(message: PrototypeAction): Uint8Array;
  decodePrototypeAction(buffer: Uint8Array): PrototypeAction;
  encodePrototypeStartingPoint(message: PrototypeStartingPoint): Uint8Array;
  decodePrototypeStartingPoint(buffer: Uint8Array): PrototypeStartingPoint;
  TriggerDevice: any;
  encodeKeyTrigger(message: KeyTrigger): Uint8Array;
  decodeKeyTrigger(buffer: Uint8Array): KeyTrigger;
  encodeHyperlink(message: Hyperlink): Uint8Array;
  decodeHyperlink(buffer: Uint8Array): Hyperlink;
  MentionSource: any;
  encodeMention(message: Mention): Uint8Array;
  decodeMention(buffer: Uint8Array): Mention;
  encodeEmbedData(message: EmbedData): Uint8Array;
  decodeEmbedData(buffer: Uint8Array): EmbedData;
  encodeStampData(message: StampData): Uint8Array;
  decodeStampData(buffer: Uint8Array): StampData;
  encodeLinkPreviewData(message: LinkPreviewData): Uint8Array;
  decodeLinkPreviewData(buffer: Uint8Array): LinkPreviewData;
  encodeViewport(message: Viewport): Uint8Array;
  decodeViewport(buffer: Uint8Array): Viewport;
  encodeMouse(message: Mouse): Uint8Array;
  decodeMouse(buffer: Uint8Array): Mouse;
  encodeClick(message: Click): Uint8Array;
  decodeClick(buffer: Uint8Array): Click;
  encodeScrollPosition(message: ScrollPosition): Uint8Array;
  decodeScrollPosition(buffer: Uint8Array): ScrollPosition;
  encodeTriggeredOverlay(message: TriggeredOverlay): Uint8Array;
  decodeTriggeredOverlay(buffer: Uint8Array): TriggeredOverlay;
  encodeTriggeredOverlayData(message: TriggeredOverlayData): Uint8Array;
  decodeTriggeredOverlayData(buffer: Uint8Array): TriggeredOverlayData;
  encodeTriggeredSetVariableActionData(message: TriggeredSetVariableActionData): Uint8Array;
  decodeTriggeredSetVariableActionData(buffer: Uint8Array): TriggeredSetVariableActionData;
  encodeVideoStateChangeData(message: VideoStateChangeData): Uint8Array;
  decodeVideoStateChangeData(buffer: Uint8Array): VideoStateChangeData;
  encodePresentedState(message: PresentedState): Uint8Array;
  decodePresentedState(buffer: Uint8Array): PresentedState;
  TransitionDirection: any;
  encodeTopLevelPlaybackChange(message: TopLevelPlaybackChange): Uint8Array;
  decodeTopLevelPlaybackChange(buffer: Uint8Array): TopLevelPlaybackChange;
  encodeInstanceStateChange(message: InstanceStateChange): Uint8Array;
  decodeInstanceStateChange(buffer: Uint8Array): InstanceStateChange;
  encodeTextCursor(message: TextCursor): Uint8Array;
  decodeTextCursor(buffer: Uint8Array): TextCursor;
  encodeTextSelection(message: TextSelection): Uint8Array;
  decodeTextSelection(buffer: Uint8Array): TextSelection;
  PlaybackChangePhase: any;
  encodePlaybackChangeKeyframe(message: PlaybackChangeKeyframe): Uint8Array;
  decodePlaybackChangeKeyframe(buffer: Uint8Array): PlaybackChangeKeyframe;
  encodeStateMapping(message: StateMapping): Uint8Array;
  decodeStateMapping(buffer: Uint8Array): StateMapping;
  encodeScrollMapping(message: ScrollMapping): Uint8Array;
  decodeScrollMapping(buffer: Uint8Array): ScrollMapping;
  encodePlaybackUpdate(message: PlaybackUpdate): Uint8Array;
  decodePlaybackUpdate(buffer: Uint8Array): PlaybackUpdate;
  encodeChatMessage(message: ChatMessage): Uint8Array;
  decodeChatMessage(buffer: Uint8Array): ChatMessage;
  encodeVoiceMetadata(message: VoiceMetadata): Uint8Array;
  decodeVoiceMetadata(buffer: Uint8Array): VoiceMetadata;
  Heartbeat: any;
  encodeUserChange(message: UserChange): Uint8Array;
  decodeUserChange(buffer: Uint8Array): UserChange;
  encodeInteractiveSlideElementChange(message: InteractiveSlideElementChange): Uint8Array;
  decodeInteractiveSlideElementChange(buffer: Uint8Array): InteractiveSlideElementChange;
  SceneGraphQueryBehavior: any;
  encodeSceneGraphQuery(message: SceneGraphQuery): Uint8Array;
  decodeSceneGraphQuery(buffer: Uint8Array): SceneGraphQuery;
  encodeNodeChangesMetadata(message: NodeChangesMetadata): Uint8Array;
  decodeNodeChangesMetadata(buffer: Uint8Array): NodeChangesMetadata;
  encodeCursorReaction(message: CursorReaction): Uint8Array;
  decodeCursorReaction(buffer: Uint8Array): CursorReaction;
  encodeTimerInfo(message: TimerInfo): Uint8Array;
  decodeTimerInfo(buffer: Uint8Array): TimerInfo;
  encodeMusicInfo(message: MusicInfo): Uint8Array;
  decodeMusicInfo(buffer: Uint8Array): MusicInfo;
  encodePresenterNomination(message: PresenterNomination): Uint8Array;
  decodePresenterNomination(buffer: Uint8Array): PresenterNomination;
  encodePresenterInfo(message: PresenterInfo): Uint8Array;
  decodePresenterInfo(buffer: Uint8Array): PresenterInfo;
  encodeClientBroadcast(message: ClientBroadcast): Uint8Array;
  decodeClientBroadcast(buffer: Uint8Array): ClientBroadcast;
  encodeMessage(message: Message): Uint8Array;
  decodeMessage(buffer: Uint8Array): Message;
  encodeDiffChunk(message: DiffChunk): Uint8Array;
  decodeDiffChunk(buffer: Uint8Array): DiffChunk;
  encodeDiffPayload(message: DiffPayload): Uint8Array;
  decodeDiffPayload(buffer: Uint8Array): DiffPayload;
  RichMediaType: any;
  encodeRichMediaData(message: RichMediaData): Uint8Array;
  decodeRichMediaData(buffer: Uint8Array): RichMediaData;
  VariableDataType: any;
  VariableResolvedDataType: any;
  encodeVariableAnyValue(message: VariableAnyValue): Uint8Array;
  decodeVariableAnyValue(buffer: Uint8Array): VariableAnyValue;
  ExpressionFunction: any;
  encodeExpression(message: Expression): Uint8Array;
  decodeExpression(buffer: Uint8Array): Expression;
  encodeVariableMapValue(message: VariableMapValue): Uint8Array;
  decodeVariableMapValue(buffer: Uint8Array): VariableMapValue;
  encodeVariableMap(message: VariableMap): Uint8Array;
  decodeVariableMap(buffer: Uint8Array): VariableMap;
  encodeVariableFontStyle(message: VariableFontStyle): Uint8Array;
  decodeVariableFontStyle(buffer: Uint8Array): VariableFontStyle;
  encodeVariableData(message: VariableData): Uint8Array;
  decodeVariableData(buffer: Uint8Array): VariableData;
  encodeVariableSetMode(message: VariableSetMode): Uint8Array;
  decodeVariableSetMode(buffer: Uint8Array): VariableSetMode;
  encodeVariableDataValues(message: VariableDataValues): Uint8Array;
  decodeVariableDataValues(buffer: Uint8Array): VariableDataValues;
  encodeVariableDataValuesEntry(message: VariableDataValuesEntry): Uint8Array;
  decodeVariableDataValuesEntry(buffer: Uint8Array): VariableDataValuesEntry;
  VariableScope: any;
  CodeSyntaxPlatform: any;
  encodeOptionalVector(message: OptionalVector): Uint8Array;
  decodeOptionalVector(buffer: Uint8Array): OptionalVector;
  HTMLTag: any;
  ARIARole: any;
  encodeMigrationStatus(message: MigrationStatus): Uint8Array;
  decodeMigrationStatus(buffer: Uint8Array): MigrationStatus;
  encodeNodeFieldMap(message: NodeFieldMap): Uint8Array;
  decodeNodeFieldMap(buffer: Uint8Array): NodeFieldMap;
  encodeNodeFieldMapEntry(message: NodeFieldMapEntry): Uint8Array;
  decodeNodeFieldMapEntry(buffer: Uint8Array): NodeFieldMapEntry;
  ColorProfile: any;
  DocumentColorProfile: any;
  ChildReadingDirection: any;
  encodeARIAAttributeAnyValue(message: ARIAAttributeAnyValue): Uint8Array;
  decodeARIAAttributeAnyValue(buffer: Uint8Array): ARIAAttributeAnyValue;
  ARIAAttributeDataType: any;
  encodeARIAAttributeData(message: ARIAAttributeData): Uint8Array;
  decodeARIAAttributeData(buffer: Uint8Array): ARIAAttributeData;
  encodeARIAAttributesMap(message: ARIAAttributesMap): Uint8Array;
  decodeARIAAttributesMap(buffer: Uint8Array): ARIAAttributesMap;
  encodeARIAAttributesMapEntry(message: ARIAAttributesMapEntry): Uint8Array;
  decodeARIAAttributesMapEntry(buffer: Uint8Array): ARIAAttributesMapEntry;
  encodeHandoffStatusMapEntry(message: HandoffStatusMapEntry): Uint8Array;
  decodeHandoffStatusMapEntry(buffer: Uint8Array): HandoffStatusMapEntry;
  encodeHandoffStatusMap(message: HandoffStatusMap): Uint8Array;
  decodeHandoffStatusMap(buffer: Uint8Array): HandoffStatusMap;
  encodeEditScopeInfo(message: EditScopeInfo): Uint8Array;
  decodeEditScopeInfo(buffer: Uint8Array): EditScopeInfo;
  encodeEditScopeStack(message: EditScopeStack): Uint8Array;
  decodeEditScopeStack(buffer: Uint8Array): EditScopeStack;
  encodeEditScope(message: EditScope): Uint8Array;
  decodeEditScope(buffer: Uint8Array): EditScope;
  EditScopeType: any;
  encodeSectionPresetInfo(message: SectionPresetInfo): Uint8Array;
  decodeSectionPresetInfo(buffer: Uint8Array): SectionPresetInfo;
  encodeVariableIdOrVariableOverrideId(message: VariableIdOrVariableOverrideId): Uint8Array;
  decodeVariableIdOrVariableOverrideId(buffer: Uint8Array): VariableIdOrVariableOverrideId;
}
