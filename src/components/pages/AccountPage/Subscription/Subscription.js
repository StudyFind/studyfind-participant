import { useEffect, useState } from "react";

import { auth, firestore, functions } from "database/firebase";

import { Grid } from "@chakra-ui/react";
import { Loader } from "components";
import { SiHive, SiMarketo, SiMicrosoft } from "react-icons/si";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";

import SubscriptionView from "./SubscriptionView";
import SubscriptionForm from "./SubscriptionForm";

function Subscription({ showButtons, handleCancel, handleUpdate }) {
  const [isBilledAnnually, setIsBilledAnnually] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [currentPlan, setCurrentPlan] = useState("");
  const [loading, setLoading] = useState(true);
  const [linking, setLinking] = useState(false);

  const selectedPlanID = {
    basic: {
      annually: "price_1JU1hsIzlngCzbHLkjD7vwaj",
      monthly: "price_1JU1gaIzlngCzbHLv2NowTqn",
    },
    standard: {
      annually: "price_1JU1jwIzlngCzbHL32su7mlE",
      monthly: "price_1JU1jQIzlngCzbHLwgm0SVAe",
    },
    premium: {
      annually: "price_1JU1n4IzlngCzbHLAFMoPmtq",
      monthly: "price_1JU1mJIzlngCzbHLsYWJCSFm",
    },
  }[selectedPlan][isBilledAnnually ? "annually" : "monthly"];

  const handleChangeBilledAnnually = (_, value) => {
    setIsBilledAnnually(value);
  };

  const handleSelectPlan = (name) => {
    setSelectedPlan(name);
  };

  const handleSubscribe = async () => {
    setLinking(true);

    const docRef = await firestore
      .collection("researchers")
      .doc(auth.currentUser.uid)
      .collection("checkout_sessions")
      .add({
        price: selectedPlanID,
        trial_from_plan: true,
        allow_promotion_codes: true,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot((snapshot) => {
      const { error, url } = snapshot.data();

      if (error) {
        setLinking(false);
      }

      if (url) {
        setLinking(false);
        window.location.assign(url);
      }
    });
  };

  const handleManageSubscription = async () => {
    const FUNCTION_CODE = "ext-firestore-stripe-subscriptions-createPortalLink";
    const functionRef = functions.httpsCallable(FUNCTION_CODE);

    setLinking(true);
    const { data } = await functionRef({ returnUrl: window.location.origin });
    setLinking(false);

    window.location.assign(data.url);
  };

  const getCustomClaimRole = async () => {
    await auth.currentUser.getIdToken(true);
    const decodedToken = await auth.currentUser.getIdTokenResult();
    const plan = decodedToken?.claims?.stripeRole || "basic";

    setCurrentPlan(plan);
    setSelectedPlan(plan);
    setLoading(false);
  };

  useEffect(() => {
    getCustomClaimRole();
  }, []);

  const plans = [
    {
      icon: SiMicrosoft,
      name: "basic",
      title: "Basic",
      price: ["$29", "$19"],
      features: ["Create Studies", "Recruit Participants", "Track Participant Status"],
    },

    {
      icon: SiMarketo,
      name: "standard",
      title: "Standard",
      price: ["$99", "$79"],
      features: ["Everything in Basic", "Participant Reminders", "Schedule Meetings"],
      isPopular: true,
    },

    {
      icon: SiHive,
      name: "premium",
      title: "Premium",
      price: ["$249", "$199"],
      features: ["Everything in Standard", "Instant Messaging", "Email and Text Notifications"],
    },
  ];

  return (
    <AccountWrapper
      showButtons={showButtons}
      handleCancel={handleCancel}
      handleUpdate={handleUpdate}
    >
      <Grid gap="20px">
        <AccountHeader
          title="Subscription"
          description="Choose the plan that suits you best and click continue to enter your credit card details to purchase the desired plan"
        />
        {loading ? (
          <Loader height="300px" />
        ) : currentPlan === "Premium" ? (
          <SubscriptionView
            currentPlan={currentPlan}
            linking={linking}
            handleManageSubscription={handleManageSubscription}
          />
        ) : (
          <SubscriptionForm
            plans={plans}
            selectedPlan={selectedPlan}
            linking={linking}
            handleSubscribe={handleSubscribe}
            handleSelectPlan={handleSelectPlan}
            isBilledAnnually={isBilledAnnually}
            handleChangeBilledAnnually={handleChangeBilledAnnually}
          />
        )}
      </Grid>
    </AccountWrapper>
  );
}

export default Subscription;
