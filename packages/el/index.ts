import {
  ElAffix,
  ElAlert,
  ElAnchor,
  ElAnchorLink,
  ElAside,
  ElAutoResizer,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElCollection,
  ElCollectionItem,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElCountdown,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInfiniteScroll,
  ElInput,
  ElInputNumber,
  ElInputTag,
  ElLink,
  ElLoading,
  ElLoadingDirective,
  ElLoadingService,
  ElMain,
  ElMention,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElOption,
  ElOptionGroup,
  ElOverlay,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopoverDirective,
  ElPopper,
  ElPopperArrow,
  ElPopperContent,
  ElPopperTrigger,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSegmented,
  ElSelect,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElSplitter,
  ElSplitterPanel,
  ElStatistic,
  ElStep,
  ElSteps,
  ElSubMenu,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTag,
  ElText,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTour,
  ElTourStep,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
  ElWatermark,
} from "element-plus";

// console.log("all", all);
// const components = [];
// for (var key in all) {
//   if (/^El/.test(key)) {
//     components.push(key);
//   }
// }

// console.log("components", components.join(","));

interface El {
  Affix: typeof ElAffix;
  Alert: typeof ElAlert;
  Anchor: typeof ElAnchor;
  AnchorLink: typeof ElAnchorLink;
  Aside: typeof ElAside;
  AutoResizer: typeof ElAutoResizer;
  Autocomplete: typeof ElAutocomplete;
  Avatar: typeof ElAvatar;
  Backtop: typeof ElBacktop;
  Badge: typeof ElBadge;
  Breadcrumb: typeof ElBreadcrumb;
  BreadcrumbItem: typeof ElBreadcrumbItem;
  Button: typeof ElButton;
  ButtonGroup: typeof ElButtonGroup;
  Calendar: typeof ElCalendar;
  Card: typeof ElCard;
  Carousel: typeof ElCarousel;
  CarouselItem: typeof ElCarouselItem;
  Cascader: typeof ElCascader;
  CascaderPanel: typeof ElCascaderPanel;
  CheckTag: typeof ElCheckTag;
  Checkbox: typeof ElCheckbox;
  CheckboxButton: typeof ElCheckboxButton;
  CheckboxGroup: typeof ElCheckboxGroup;
  Col: typeof ElCol;
  Collapse: typeof ElCollapse;
  CollapseItem: typeof ElCollapseItem;
  CollapseTransition: typeof ElCollapseTransition;
  Collection: typeof ElCollection;
  CollectionItem: typeof ElCollectionItem;
  ColorPicker: typeof ElColorPicker;
  ConfigProvider: typeof ElConfigProvider;
  Container: typeof ElContainer;
  Countdown: typeof ElCountdown;
  DatePicker: typeof ElDatePicker;
  Descriptions: typeof ElDescriptions;
  DescriptionsItem: typeof ElDescriptionsItem;
  Dialog: typeof ElDialog;
  Divider: typeof ElDivider;
  Drawer: typeof ElDrawer;
  Dropdown: typeof ElDropdown;
  DropdownItem: typeof ElDropdownItem;
  DropdownMenu: typeof ElDropdownMenu;
  Empty: typeof ElEmpty;
  Footer: typeof ElFooter;
  Form: typeof ElForm;
  FormItem: typeof ElFormItem;
  Header: typeof ElHeader;
  Icon: typeof ElIcon;
  Image: typeof ElImage;
  ImageViewer: typeof ElImageViewer;
  InfiniteScroll: typeof ElInfiniteScroll;
  Input: typeof ElInput;
  InputNumber: typeof ElInputNumber;
  InputTag: typeof ElInputTag;
  Link: typeof ElLink;
  Loading: typeof ElLoading;
  LoadingDirective: typeof ElLoadingDirective;
  LoadingService: typeof ElLoadingService;
  Main: typeof ElMain;
  Mention: typeof ElMention;
  Menu: typeof ElMenu;
  MenuItem: typeof ElMenuItem;
  MenuItemGroup: typeof ElMenuItemGroup;
  Message: typeof ElMessage;
  MessageBox: typeof ElMessageBox;
  Notification: typeof ElNotification;
  Option: typeof ElOption;
  OptionGroup: typeof ElOptionGroup;
  Overlay: typeof ElOverlay;
  PageHeader: typeof ElPageHeader;
  Pagination: typeof ElPagination;
  Popconfirm: typeof ElPopconfirm;
  Popover: typeof ElPopover;
  PopoverDirective: typeof ElPopoverDirective;
  Popper: typeof ElPopper;
  PopperArrow: typeof ElPopperArrow;
  PopperContent: typeof ElPopperContent;
  PopperTrigger: typeof ElPopperTrigger;
  Progress: typeof ElProgress;
  Radio: typeof ElRadio;
  RadioButton: typeof ElRadioButton;
  RadioGroup: typeof ElRadioGroup;
  Rate: typeof ElRate;
  Result: typeof ElResult;
  Row: typeof ElRow;
  Scrollbar: typeof ElScrollbar;
  Segmented: typeof ElSegmented;
  Select: typeof ElSelect;
  SelectV2: typeof ElSelectV2;
  Skeleton: typeof ElSkeleton;
  SkeletonItem: typeof ElSkeletonItem;
  Slider: typeof ElSlider;
  Space: typeof ElSpace;
  Splitter: typeof ElSplitter;
  SplitterPanel: typeof ElSplitterPanel;
  Statistic: typeof ElStatistic;
  Step: typeof ElStep;
  Steps: typeof ElSteps;
  SubMenu: typeof ElSubMenu;
  Switch: typeof ElSwitch;
  TabPane: typeof ElTabPane;
  Table: typeof ElTable;
  TableColumn: typeof ElTableColumn;
  TableV2: typeof ElTableV2;
  Tabs: typeof ElTabs;
  Tag: typeof ElTag;
  Text: typeof ElText;
  TimePicker: typeof ElTimePicker;
  TimeSelect: typeof ElTimeSelect;
  Timeline: typeof ElTimeline;
  TimelineItem: typeof ElTimelineItem;
  Tooltip: typeof ElTooltip;
  Tour: typeof ElTour;
  TourStep: typeof ElTourStep;
  Transfer: typeof ElTransfer;
  Tree: typeof ElTree;
  TreeSelect: typeof ElTreeSelect;
  TreeV2: typeof ElTreeV2;
  Upload: typeof ElUpload;
  Watermark: typeof ElWatermark;
}

export default new Proxy<El>({} as El, {
  get(target, prop) {
    if (prop === "Affix") return ElAffix;
    if (prop === "Alert") return ElAlert;
    if (prop === "Anchor") return ElAnchor;
    if (prop === "AnchorLink") return ElAnchorLink;
    if (prop === "Aside") return ElAside;
    if (prop === "AutoResizer") return ElAutoResizer;
    if (prop === "Autocomplete") return ElAutocomplete;
    if (prop === "Avatar") return ElAvatar;
    if (prop === "Backtop") return ElBacktop;
    if (prop === "Badge") return ElBadge;
    if (prop === "Breadcrumb") return ElBreadcrumb;
    if (prop === "BreadcrumbItem") return ElBreadcrumbItem;
    if (prop === "Button") return ElButton;
    if (prop === "ButtonGroup") return ElButtonGroup;
    if (prop === "Calendar") return ElCalendar;
    if (prop === "Card") return ElCard;
    if (prop === "Carousel") return ElCarousel;
    if (prop === "CarouselItem") return ElCarouselItem;
    if (prop === "Cascader") return ElCascader;
    if (prop === "CascaderPanel") return ElCascaderPanel;
    if (prop === "CheckTag") return ElCheckTag;
    if (prop === "Checkbox") return ElCheckbox;
    if (prop === "CheckboxButton") return ElCheckboxButton;
    if (prop === "CheckboxGroup") return ElCheckboxGroup;
    if (prop === "Col") return ElCol;
    if (prop === "Collapse") return ElCollapse;
    if (prop === "CollapseItem") return ElCollapseItem;
    if (prop === "CollapseTransition") return ElCollapseTransition;
    if (prop === "Collection") return ElCollection;
    if (prop === "CollectionItem") return ElCollectionItem;
    if (prop === "ColorPicker") return ElColorPicker;
    if (prop === "ConfigProvider") return ElConfigProvider;
    if (prop === "Container") return ElContainer;
    if (prop === "Countdown") return ElCountdown;
    if (prop === "DatePicker") return ElDatePicker;
    if (prop === "Descriptions") return ElDescriptions;
    if (prop === "DescriptionsItem") return ElDescriptionsItem;
    if (prop === "Dialog") return ElDialog;
    if (prop === "Divider") return ElDivider;
    if (prop === "Drawer") return ElDrawer;
    if (prop === "Dropdown") return ElDropdown;
    if (prop === "DropdownItem") return ElDropdownItem;
    if (prop === "DropdownMenu") return ElDropdownMenu;
    if (prop === "Empty") return ElEmpty;
    if (prop === "Footer") return ElFooter;
    if (prop === "Form") return ElForm;
    if (prop === "FormItem") return ElFormItem;
    if (prop === "Header") return ElHeader;
    if (prop === "Icon") return ElIcon;
    if (prop === "Image") return ElImage;
    if (prop === "ImageViewer") return ElImageViewer;
    if (prop === "InfiniteScroll") return ElInfiniteScroll;
    if (prop === "Input") return ElInput;
    if (prop === "InputNumber") return ElInputNumber;
    if (prop === "InputTag") return ElInputTag;
    if (prop === "Link") return ElLink;
    if (prop === "Loading") return ElLoading;
    if (prop === "LoadingDirective") return ElLoadingDirective;
    if (prop === "LoadingService") return ElLoadingService;
    if (prop === "Main") return ElMain;
    if (prop === "Mention") return ElMention;
    if (prop === "Menu") return ElMenu;
    if (prop === "MenuItem") return ElMenuItem;
    if (prop === "MenuItemGroup") return ElMenuItemGroup;
    if (prop === "Message") return ElMessage;
    if (prop === "MessageBox") return ElMessageBox;
    if (prop === "Notification") return ElNotification;
    if (prop === "Option") return ElOption;
    if (prop === "OptionGroup") return ElOptionGroup;
    if (prop === "Overlay") return ElOverlay;
    if (prop === "PageHeader") return ElPageHeader;
    if (prop === "Pagination") return ElPagination;
    if (prop === "Popconfirm") return ElPopconfirm;
    if (prop === "Popover") return ElPopover;
    if (prop === "PopoverDirective") return ElPopoverDirective;
    if (prop === "Popper") return ElPopper;
    if (prop === "PopperArrow") return ElPopperArrow;
    if (prop === "PopperContent") return ElPopperContent;
    if (prop === "PopperTrigger") return ElPopperTrigger;
    if (prop === "Progress") return ElProgress;
    if (prop === "Radio") return ElRadio;
    if (prop === "RadioButton") return ElRadioButton;
    if (prop === "RadioGroup") return ElRadioGroup;
    if (prop === "Rate") return ElRate;
    if (prop === "Result") return ElResult;
    if (prop === "Row") return ElRow;
    if (prop === "Scrollbar") return ElScrollbar;
    if (prop === "Segmented") return ElSegmented;
    if (prop === "Select") return ElSelect;
    if (prop === "SelectV2") return ElSelectV2;
    if (prop === "Skeleton") return ElSkeleton;
    if (prop === "SkeletonItem") return ElSkeletonItem;
    if (prop === "Slider") return ElSlider;
    if (prop === "Space") return ElSpace;
    if (prop === "Splitter") return ElSplitter;
    if (prop === "SplitterPanel") return ElSplitterPanel;
    if (prop === "Statistic") return ElStatistic;
    if (prop === "Step") return ElStep;
    if (prop === "Steps") return ElSteps;
    if (prop === "SubMenu") return ElSubMenu;
    if (prop === "Switch") return ElSwitch;
    if (prop === "TabPane") return ElTabPane;
    if (prop === "Table") return ElTable;
    if (prop === "TableColumn") return ElTableColumn;
    if (prop === "TableV2") return ElTableV2;
    if (prop === "Tabs") return ElTabs;
    if (prop === "Tag") return ElTag;
    if (prop === "Text") return ElText;
    if (prop === "TimePicker") return ElTimePicker;
    if (prop === "TimeSelect") return ElTimeSelect;
    if (prop === "Timeline") return ElTimeline;
    if (prop === "TimelineItem") return ElTimelineItem;
    if (prop === "Tooltip") return ElTooltip;
    if (prop === "Tour") return ElTour;
    if (prop === "TourStep") return ElTourStep;
    if (prop === "Transfer") return ElTransfer;
    if (prop === "Tree") return ElTree;
    if (prop === "TreeSelect") return ElTreeSelect;
    if (prop === "TreeV2") return ElTreeV2;
    if (prop === "Upload") return ElUpload;
    if (prop === "Watermark") return ElWatermark;
    if (prop === "Affix") return ElAffix;
    if (prop === "Alert") return ElAlert;
    if (prop === "Anchor") return ElAnchor;
    if (prop === "AnchorLink") return ElAnchorLink;
    if (prop === "Aside") return ElAside;
    if (prop === "AutoResizer") return ElAutoResizer;
    if (prop === "Autocomplete") return ElAutocomplete;
    if (prop === "Avatar") return ElAvatar;
    if (prop === "Backtop") return ElBacktop;
    if (prop === "Badge") return ElBadge;
    if (prop === "Breadcrumb") return ElBreadcrumb;
    if (prop === "BreadcrumbItem") return ElBreadcrumbItem;
    if (prop === "Button") return ElButton;
    if (prop === "ButtonGroup") return ElButtonGroup;
    if (prop === "Calendar") return ElCalendar;
    if (prop === "Card") return ElCard;
    if (prop === "Carousel") return ElCarousel;
    if (prop === "CarouselItem") return ElCarouselItem;
    if (prop === "Cascader") return ElCascader;
    if (prop === "CascaderPanel") return ElCascaderPanel;
    if (prop === "CheckTag") return ElCheckTag;
    if (prop === "Checkbox") return ElCheckbox;
    if (prop === "CheckboxButton") return ElCheckboxButton;
    if (prop === "CheckboxGroup") return ElCheckboxGroup;
    if (prop === "Col") return ElCol;
    if (prop === "Collapse") return ElCollapse;
    if (prop === "CollapseItem") return ElCollapseItem;
    if (prop === "CollapseTransition") return ElCollapseTransition;
    if (prop === "Collection") return ElCollection;
    if (prop === "CollectionItem") return ElCollectionItem;
    if (prop === "ColorPicker") return ElColorPicker;
    if (prop === "ConfigProvider") return ElConfigProvider;
    if (prop === "Container") return ElContainer;
    if (prop === "Countdown") return ElCountdown;
    if (prop === "DatePicker") return ElDatePicker;
    if (prop === "Descriptions") return ElDescriptions;
    if (prop === "DescriptionsItem") return ElDescriptionsItem;
    if (prop === "Dialog") return ElDialog;
    if (prop === "Divider") return ElDivider;
    if (prop === "Drawer") return ElDrawer;
    if (prop === "Dropdown") return ElDropdown;
    if (prop === "DropdownItem") return ElDropdownItem;
    if (prop === "DropdownMenu") return ElDropdownMenu;
    if (prop === "Empty") return ElEmpty;
    if (prop === "Footer") return ElFooter;
    if (prop === "Form") return ElForm;
    if (prop === "FormItem") return ElFormItem;
    if (prop === "Header") return ElHeader;
    if (prop === "Icon") return ElIcon;
    if (prop === "Image") return ElImage;
    if (prop === "ImageViewer") return ElImageViewer;
    if (prop === "InfiniteScroll") return ElInfiniteScroll;
    if (prop === "Input") return ElInput;
    if (prop === "InputNumber") return ElInputNumber;
    if (prop === "InputTag") return ElInputTag;
    if (prop === "Link") return ElLink;
    if (prop === "Loading") return ElLoading;
    if (prop === "LoadingDirective") return ElLoadingDirective;
    if (prop === "LoadingService") return ElLoadingService;
    if (prop === "Main") return ElMain;
    if (prop === "Mention") return ElMention;
    if (prop === "Menu") return ElMenu;
    if (prop === "MenuItem") return ElMenuItem;
    if (prop === "MenuItemGroup") return ElMenuItemGroup;
    if (prop === "Message") return ElMessage;
    if (prop === "MessageBox") return ElMessageBox;
    if (prop === "Notification") return ElNotification;
    if (prop === "Option") return ElOption;
    if (prop === "OptionGroup") return ElOptionGroup;
    if (prop === "Overlay") return ElOverlay;
    if (prop === "PageHeader") return ElPageHeader;
    if (prop === "Pagination") return ElPagination;
    if (prop === "Popconfirm") return ElPopconfirm;
    if (prop === "Popover") return ElPopover;
    if (prop === "PopoverDirective") return ElPopoverDirective;
    if (prop === "Popper") return ElPopper;
    if (prop === "PopperArrow") return ElPopperArrow;
    if (prop === "PopperContent") return ElPopperContent;
    if (prop === "PopperTrigger") return ElPopperTrigger;
    if (prop === "Progress") return ElProgress;
    if (prop === "Radio") return ElRadio;
    if (prop === "RadioButton") return ElRadioButton;
    if (prop === "RadioGroup") return ElRadioGroup;
    if (prop === "Rate") return ElRate;
    if (prop === "Result") return ElResult;
    if (prop === "Row") return ElRow;
    if (prop === "Scrollbar") return ElScrollbar;
    if (prop === "Segmented") return ElSegmented;
    if (prop === "Select") return ElSelect;
    if (prop === "SelectV2") return ElSelectV2;
    if (prop === "Skeleton") return ElSkeleton;
    if (prop === "SkeletonItem") return ElSkeletonItem;
    if (prop === "Slider") return ElSlider;
    if (prop === "Space") return ElSpace;
    if (prop === "Splitter") return ElSplitter;
    if (prop === "SplitterPanel") return ElSplitterPanel;
    if (prop === "Statistic") return ElStatistic;
    if (prop === "Step") return ElStep;
    if (prop === "Steps") return ElSteps;
    if (prop === "SubMenu") return ElSubMenu;
    if (prop === "Switch") return ElSwitch;
    if (prop === "TabPane") return ElTabPane;
    if (prop === "Table") return ElTable;
    if (prop === "TableColumn") return ElTableColumn;
    if (prop === "TableV2") return ElTableV2;
    if (prop === "Tabs") return ElTabs;
    if (prop === "Tag") return ElTag;
    if (prop === "Text") return ElText;
    if (prop === "TimePicker") return ElTimePicker;
    if (prop === "TimeSelect") return ElTimeSelect;
    if (prop === "Timeline") return ElTimeline;
    if (prop === "TimelineItem") return ElTimelineItem;
    if (prop === "Tooltip") return ElTooltip;
    if (prop === "Tour") return ElTour;
    if (prop === "TourStep") return ElTourStep;
    if (prop === "Transfer") return ElTransfer;
    if (prop === "Tree") return ElTree;
    if (prop === "TreeSelect") return ElTreeSelect;
    if (prop === "TreeV2") return ElTreeV2;
    if (prop === "Upload") return ElUpload;
    if (prop === "Watermark") return ElWatermark;
  },
});
