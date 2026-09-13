/* @ds-bundle: {"format":4,"namespace":"HealthEquity4AllDesignSystem_0f3082","components":[{"name":"QuoteCard","sourcePath":"components/content/QuoteCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/QuoteCard.jsx":"12e8b5de67ec","components/core/Badge.jsx":"a9bd6accf813","components/core/Button.jsx":"ef64a8b1c91c","components/core/Card.jsx":"6fa7a8d5602c","components/core/IconButton.jsx":"3cbbca2f2012","components/core/Tag.jsx":"06fa216f7890","components/feedback/Dialog.jsx":"eae4a657953a","components/feedback/Tooltip.jsx":"6d7c9af760d4","components/forms/Checkbox.jsx":"2f8653427cbf","components/forms/Input.jsx":"6bc0afbe0170","components/forms/Radio.jsx":"b2115d3e93de","components/forms/Select.jsx":"5efd20cb8cf4","components/forms/Switch.jsx":"47cbbce39224","components/navigation/Tabs.jsx":"51751303f8f5","ui_kits/website/Bands.jsx":"3e3b43122ac8","ui_kits/website/CollectiveGrid.jsx":"e29dc37ce999","ui_kits/website/Footer.jsx":"7a87a0c9a8c7","ui_kits/website/Header.jsx":"2f6c9a03757f","ui_kits/website/Hero.jsx":"e184860f8192","ui_kits/website/QuoteSection.jsx":"ab7adba8830f","ui_kits/website/ServicesGrid.jsx":"ccd208f1dd2d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HealthEquity4AllDesignSystem_0f3082 = window.HealthEquity4AllDesignSystem_0f3082 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/QuoteCard.jsx
try { (() => {
function QuoteCard({
  quote,
  author,
  role
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      fontStyle: 'italic',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-relaxed)',
      margin: '0 0 var(--space-4)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, author), role && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, role)));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  sky: {
    background: 'var(--color-sky-100)',
    color: 'var(--color-sky-800)'
  },
  blossom: {
    background: 'var(--color-blossom-100)',
    color: 'var(--color-blossom-800)'
  },
  success: {
    background: '#E4F5EA',
    color: 'var(--color-success)'
  },
  warning: {
    background: '#FCF0DC',
    color: 'var(--color-warning)'
  },
  error: {
    background: '#FBE7E5',
    color: 'var(--color-error)'
  },
  neutral: {
    background: 'var(--color-ink-100)',
    color: 'var(--color-ink-700)'
  }
};
function Badge({
  tone = 'sky',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...tones[tone],
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      display: 'inline-block',
      letterSpacing: 'var(--tracking-normal)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--text-sm)'
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--text-base)'
  },
  lg: {
    padding: '14px 28px',
    fontSize: 'var(--text-md)'
  }
};
const variants = {
  primary: {
    background: 'var(--brand-primary)',
    color: '#fff',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--brand-secondary)',
    color: '#fff',
    border: '1px solid transparent'
  },
  soft: {
    background: 'var(--color-sky-100)',
    color: 'var(--color-sky-800)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid var(--color-border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  }
};
const hoverBg = {
  primary: 'var(--brand-primary-hover)',
  secondary: 'var(--brand-secondary-hover)',
  soft: 'var(--color-sky-200)',
  outline: 'var(--color-sky-50)',
  ghost: 'var(--color-ink-100)'
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  icon
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: disabled,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-normal)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast)',
      opacity: disabled ? 0.45 : 1,
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      ...v,
      ...s,
      background: hover && !disabled ? hoverBg[variant] : v.background
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  elevation = 'md',
  padding = 'var(--space-5)'
}) {
  const shadow = elevation === 'none' ? 'none' : `var(--shadow-${elevation})`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: shadow,
      border: elevation === 'none' ? '1px solid var(--color-border)' : 'none',
      padding
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  children,
  label,
  variant = 'ghost',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const styles = {
    ghost: {
      background: hover ? 'var(--color-ink-100)' : 'transparent',
      color: 'var(--text-primary)'
    },
    soft: {
      background: hover ? 'var(--color-sky-200)' : 'var(--color-sky-100)',
      color: 'var(--color-sky-800)'
    },
    solid: {
      background: hover ? 'var(--brand-primary-hover)' : 'var(--brand-primary)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...styles[variant]
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const spectrum = ['coral', 'gold', 'leaf', 'teal', 'steel', 'indigo'];
function Tag({
  children,
  color = 'coral',
  onRemove
}) {
  const hex = `var(--color-spectrum-${spectrum.includes(color) ? color : 'coral'})`;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      color: 'var(--text-primary)',
      border: `1px solid ${hex}`,
      borderRadius: 'var(--radius-full)',
      padding: '3px 10px 3px 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: hex
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      fontSize: 12,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'oklch(20% 0.02 226.5 / 0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      width: 380,
      maxWidth: '90vw',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      margin: 0,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'none',
      fontSize: 20,
      cursor: 'pointer',
      color: 'var(--text-secondary)'
    }
  }, "\xD7")), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '125%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--color-ink-900)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0,
      border: `1.5px solid ${checked ? 'var(--brand-primary)' : 'var(--color-border-strong)'}`,
      background: checked ? 'var(--brand-primary)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1",
    stroke: "#fff",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--color-error)' : focus ? 'var(--brand-primary)' : 'var(--color-border-strong)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      transition: 'box-shadow var(--duration-fast) var(--ease-standard), border-color var(--duration-fast)'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-error)',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-body)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      flexShrink: 0,
      border: `1.5px solid ${checked ? 'var(--brand-primary)' : 'var(--color-border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--brand-primary)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${focus ? 'var(--brand-primary)' : 'var(--color-border-strong)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      background: '#fff'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onChange,
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-full)',
      position: 'relative',
      flexShrink: 0,
      background: checked ? 'var(--brand-primary)' : 'var(--color-ink-300)',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left var(--duration-fast) var(--ease-standard)',
      boxShadow: 'var(--shadow-sm)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => onChange(t),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: t === active ? 'var(--brand-primary)' : 'var(--text-secondary)',
      borderBottom: `2px solid ${t === active ? 'var(--brand-primary)' : 'transparent'}`,
      marginBottom: -1,
      transition: 'color var(--duration-fast)'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Bands.jsx
try { (() => {
function ImpactBand() {
  const stats = [{
    n: '12',
    label: 'countries where collective members lead health equity work'
  }, {
    n: '40+',
    label: 'organizations advised on governance, policy and programs'
  }, {
    n: '20 yrs',
    label: 'of frontline experience in HIV, LGBTQ+ and community health'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--block-sky)',
      padding: 'var(--space-8) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'var(--space-6)'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-3xl)',
      lineHeight: 1,
      color: 'var(--color-ink-900)'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-ink-800)',
      lineHeight: 'var(--leading-normal)',
      maxWidth: 280
    }
  }, s.label)))));
}
function ClosingCTA({
  onContact
}) {
  const {
    Button
  } = window.HealthEquity4AllDesignSystem_0f3082;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--block-sky)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 320,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/panel-speaking.jpg",
    alt: "A collective member speaking on a panel",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--color-ink-900)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Tell us what you are trying to change"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-ink-800)',
      lineHeight: 'var(--leading-normal)',
      maxWidth: 420,
      margin: 0
    }
  }, "Bring us the part of the work that feels stuck. We will tell you honestly whether we are the right people for it."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onContact
  }, "Contact Us"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Bands.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CollectiveGrid.jsx
try { (() => {
const collective = [{
  name: 'Ace Robinson',
  bio: 'Founder & Principal. Leading administrative and policy communicable disease advocate; Acting Director, Duke University Sexual & Gender Minority Wellness program.'
}, {
  name: 'Lauren Miller',
  bio: 'Advocate for DEI and health equity, guided by "Friendship, Leadership, and Service to humanity."'
}, {
  name: 'Diego Calixto',
  bio: 'Brazilian activist living with HIV; researcher at Fiocruz Brasília focusing on health & social justice.'
}, {
  name: 'Lucy Wanjiku Njenga',
  bio: 'HIV response leader for 10+ years; builds feminist movements from grassroots to global level.'
}, {
  name: 'Eduardo Culbeaux',
  bio: 'Educator in Southeast Asia for over a decade; empowers youth through journalism programs.'
}];
function CollectiveGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) var(--space-7)',
      background: 'var(--color-paper-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-sky-700)',
      marginBottom: 'var(--space-3)'
    }
  }, "Who We Are"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-2)',
      lineHeight: 'var(--leading-snug)'
    }
  }, "The Collective"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      maxWidth: 520,
      margin: '0 0 var(--space-7)',
      lineHeight: 'var(--leading-normal)'
    }
  }, "Public health leaders who are truly global, working where they live."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
      gap: 'var(--space-5)'
    }
  }, collective.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      background: 'var(--color-paper-200)',
      border: '2px dashed var(--color-paper-300)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-ink-500)'
    }
  }, "Portrait \u2014 ", p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, p.bio))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CollectiveGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function ContactDialog({
  open,
  onClose
}) {
  const {
    Dialog,
    Input,
    Button
  } = window.HealthEquity4AllDesignSystem_0f3082;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Contact Us",
    onClose: () => {
      onClose();
      setSent(false);
    }
  }, sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      margin: 0,
      lineHeight: 'var(--leading-normal)'
    }
  }, "Thank you for contacting us.", /*#__PURE__*/React.createElement("br", null), "We will get back to you as soon as possible.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "How can we help?"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSent(true)
  }, "Send Message")));
}
function Footer({
  onContact
}) {
  const cols = [{
    h: 'Business Hours',
    body: 'Mon – Fri, 8:00 am – 5:00 pm\nSat – Sun, Closed'
  }, {
    h: 'Locations',
    body: 'Seattle, USA\nCape Town, South Africa'
  }, {
    h: 'Available In',
    body: 'English · Français\nEspañol · Português'
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'var(--space-8) var(--space-7)',
      background: 'var(--color-ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-6)'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-paper-200)',
      whiteSpace: 'pre-line',
      lineHeight: 'var(--leading-normal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-md)',
      color: 'var(--color-paper-50)',
      marginBottom: 8
    }
  }, c.h), c.body)), /*#__PURE__*/React.createElement("button", {
    onClick: onContact,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--color-ink-900)',
      background: 'var(--color-sky-300)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '12px 22px',
      minHeight: 44,
      cursor: 'pointer',
      fontSize: 'var(--text-sm)',
      alignSelf: 'flex-start'
    }
  }, "Contact Us \u2192")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const LANGS = ['EN', 'FR', 'ES', 'PT'];
function Header() {
  const [open, setOpen] = React.useState(null);
  const [lang, setLang] = React.useState('EN');
  const {
    Button
  } = window.HealthEquity4AllDesignSystem_0f3082;
  const nav = {
    'Non-Profit Leadership': ['Board Governance', 'Executive Coaching'],
    'Organizational Development': ['Program Oversight', 'Marketing and Communications', 'Public Policy', 'Grant Writing'],
    'Trainings': ['Racial Equity', 'LGBTQ+ Equity', 'Social Determinants of Health Awareness'],
    'Public Speaking': ['Keynote', 'Moderating']
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-ink-900)',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: '7px var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-paper-200)'
    }
  }, "Language"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, LANGS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: '0.04em',
      padding: '4px 10px',
      minHeight: 26,
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer',
      background: lang === l ? 'var(--color-sky-300)' : 'transparent',
      color: lang === l ? 'var(--color-ink-900)' : 'var(--color-paper-200)'
    }
  }, l)))), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: '16px var(--space-7)',
      background: 'var(--color-paper-50)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/mark-transparent.webp",
    alt: "Health Equity 4 All",
    style: {
      height: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, "Equity Is the Word")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, Object.keys(nav).map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    onMouseEnter: () => setOpen(k),
    onMouseLeave: () => setOpen(null),
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, k), open === k && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 0,
      background: 'var(--color-paper-0)',
      boxShadow: 'var(--shadow-lg)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-border)',
      padding: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 240
    }
  }, nav[k].map(item => /*#__PURE__*/React.createElement("span", {
    key: item,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      padding: '6px 8px'
    }
  }, item))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Work With Us"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onContact
}) {
  const {
    Button
  } = window.HealthEquity4AllDesignSystem_0f3082;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)',
      background: 'var(--color-paper-50)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9) var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-blossom-700)'
    }
  }, "Onward. Together."), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-3xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-tight)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Equitable healthcare, built with the communities it has left out"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-normal)',
      maxWidth: 460,
      margin: 0
    }
  }, "We are a global collective of public health leaders. We work alongside organizations to turn commitments to equity into governance, programs and practice that hold up."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onContact
  }, "Start a Conversation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "See Our Services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 460,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/team-outdoors.jpg",
    alt: "Four members of the collective standing together outdoors",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%'
    }
  })));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteSection.jsx
try { (() => {
const quotes = [{
  quote: 'We must move beyond words into actionable steps. Show me your receipts.',
  author: 'Ace Robinson',
  role: 'M.P.H., M.H.L'
}, {
  quote: 'The major difference between public health and thermodynamics is that thermodynamics is easier.',
  author: 'Ace Robinson',
  role: 'M.P.H., M.H.L'
}, {
  quote: 'Achieving health equity is hard. Sometimes it means we have to go over, under, around or through challenges.',
  author: 'Ace Robinson',
  role: 'M.P.H., M.H.L'
}];
function QuoteSection() {
  const [i, setI] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--block-blossom)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 340,
      background: 'var(--color-blossom-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px dashed var(--color-blossom-600)',
      borderRadius: 'var(--radius-md)',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      textAlign: 'center',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-blossom-800)'
    }
  }, "Portrait slot"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-blossom-800)',
      maxWidth: 200,
      lineHeight: 'var(--leading-normal)'
    }
  }, "Warm portrait, eye contact, full-bleed crop to the edge of the block"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-blossom-800)'
    }
  }, "In Their Words"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: 'var(--color-ink-900)',
      lineHeight: 'var(--leading-snug)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "\u201C", quotes[i].quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--color-ink-800)',
      fontSize: 'var(--text-sm)'
    }
  }, quotes[i].author, ", ", quotes[i].role), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, quotes.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": 'Quote ' + (idx + 1),
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      background: idx === i ? 'var(--color-ink-900)' : 'var(--color-blossom-500)'
    }
  })))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesGrid.jsx
try { (() => {
const services = [{
  title: 'Non-Profit Leadership',
  items: ['Board Governance', 'Executive Coaching'],
  color: 'coral',
  photo: 'whiteboard-session.jpg',
  alt: 'Two colleagues mapping ideas on a whiteboard'
}, {
  title: 'Organizational Development',
  items: ['Program Oversight', 'Marketing & Communications', 'Public Policy', 'Grant Writing'],
  color: 'teal',
  photo: 'pair-working.jpg',
  alt: 'Two colleagues working through a problem at a laptop'
}, {
  title: 'Trainings',
  items: ['Racial Equity', 'LGBTQ+ Equity', 'Social Determinants of Health Awareness'],
  color: 'gold',
  photo: 'team-meeting.jpg',
  alt: 'A team in discussion around a table'
}, {
  title: 'Public Speaking',
  items: ['Keynote', 'Moderating'],
  color: 'indigo',
  photo: 'lab-research.jpg',
  alt: 'A researcher at work in a laboratory'
}];
function ServicesGrid() {
  const {
    Tag
  } = window.HealthEquity4AllDesignSystem_0f3082;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) var(--space-7)',
      background: 'var(--color-paper-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-sky-700)',
      marginBottom: 'var(--space-3)'
    }
  }, "What We Do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-7)',
      maxWidth: 620,
      lineHeight: 'var(--leading-snug)'
    }
  }, "Four ways we work with organizations"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-5)'
    }
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      background: 'var(--color-paper-0)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/photos/' + s.photo,
    alt: s.alt,
    style: {
      width: '100%',
      height: 150,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-snug)'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, s.items.map(i => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    color: s.color
  }, i)))))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
